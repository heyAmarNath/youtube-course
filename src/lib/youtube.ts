import { parseDuration } from "@/lib/duration";
import type { Playlist, Video, YouTubePlaylistItemsResponse, YouTubePlaylistResponse, YouTubeVideosResponse } from "@/types/youtube";

const BASE = "https://www.googleapis.com/youtube/v3";
const bestThumbnail = (thumbnails: Record<string, { url: string }>) => thumbnails.maxres ?? thumbnails.high ?? thumbnails.medium ?? thumbnails.default ?? { url: "" };

export function extractPlaylistId(input: string): string | null {
  try { const url = new URL(input.trim()); if (!/(^|\.)youtube\.com$/.test(url.hostname) && url.hostname !== "youtu.be") return null; return url.searchParams.get("list"); } catch { return null; }
}
async function request<T>(path: string, params: Record<string, string>): Promise<T> {
  const key = typeof window !== "undefined" ? localStorage.getItem("youtube-course-api-key") : null;
  if (!key) throw new Error("Add your YouTube Data API key on the home page before importing a playlist.");
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 15_000);
  let response: Response;
  try { response = await fetch(`${BASE}/${path}?${new URLSearchParams({ ...params, key })}`, { cache: "no-store", signal: controller.signal }); }
  catch (error) { if (error instanceof DOMException && error.name === "AbortError") throw new Error("YouTube took too long to respond. Please try again."); throw new Error("Could not reach YouTube. Check your internet connection and try again."); }
  finally { window.clearTimeout(timeout); }
  if (!response.ok) { const body = await response.json().catch(() => null) as { error?: { message?: string } } | null; if (response.status === 404) throw new Error("That playlist could not be found."); if (response.status === 403) throw new Error("YouTube denied this request. Check your API key, restrictions, or quota."); throw new Error(body?.error?.message ?? "YouTube could not load this playlist."); }
  return response.json() as Promise<T>;
}

export async function fetchPlaylist(playlistId: string): Promise<{ playlist: Playlist; videos: Video[] }> {
  const metadata = await request<YouTubePlaylistResponse>("playlists", { part: "snippet,contentDetails", id: playlistId });
  const item = metadata.items[0]; if (!item) throw new Error("That playlist could not be found or is private.");
  const playlist: Playlist = { id: item.id, title: item.snippet.title, description: item.snippet.description, channelTitle: item.snippet.channelTitle, thumbnail: bestThumbnail(item.snippet.thumbnails), itemCount: item.contentDetails.itemCount };
  const entries: Array<{ id: string; videoId: string; title: string; thumbnail: { url: string }; position: number }> = [];
  let pageToken: string | undefined;
  do { const page = await request<YouTubePlaylistItemsResponse>("playlistItems", { part: "snippet", playlistId, maxResults: "50", ...(pageToken ? { pageToken } : {}) }); entries.push(...page.items.filter((entry) => entry.snippet.resourceId.videoId).map((entry) => ({ id: entry.id, videoId: entry.snippet.resourceId.videoId, title: entry.snippet.title, thumbnail: bestThumbnail(entry.snippet.thumbnails), position: entry.snippet.position }))); pageToken = page.nextPageToken; } while (pageToken);
  const details = new Map<string, YouTubeVideosResponse["items"][number]>();
  for (let i = 0; i < entries.length; i += 50) { const data = await request<YouTubeVideosResponse>("videos", { part: "snippet,contentDetails", id: entries.slice(i, i + 50).map((entry) => entry.videoId).join(",") }); data.items.forEach((video) => details.set(video.id, video)); }
  const videos = entries.map((entry): Video => { const detail = details.get(entry.videoId); const duration = detail?.contentDetails.duration ?? "PT0S"; return { id: entry.videoId, playlistItemId: entry.id, title: detail?.snippet.title ?? entry.title, thumbnail: detail ? bestThumbnail(detail.snippet.thumbnails) : entry.thumbnail, duration, durationSeconds: parseDuration(duration), position: entry.position }; });
  return { playlist, videos };
}
