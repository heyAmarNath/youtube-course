import { CheckCircle2 } from "lucide-react";
import { formatDuration } from "@/lib/duration";
import type { Video } from "@/types/youtube";

export function AllVideosGrid({ videos, completed }: { videos: Video[]; completed: string[] }) {
  return <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{videos.map((video) => { const done = completed.includes(video.id); return <article key={video.playlistItemId} className={`overflow-hidden rounded-lg border border-[#e6e5e0] bg-white ${done ? "opacity-60" : ""}`}><img src={video.thumbnail.url} alt="" className="aspect-video w-full object-cover"/><div className="p-4"><div className="flex gap-2"><p className={`min-h-11 flex-1 text-sm font-semibold leading-snug ${done ? "line-through" : ""}`}>{video.title}</p>{done && <CheckCircle2 className="h-4 w-4 shrink-0 text-[#1f8a65]"/>}</div><p className="mt-3 text-xs text-[#807d72]">Lesson {video.position + 1} · {formatDuration(video.durationSeconds)}</p></div></article>; })}</div>;
}
