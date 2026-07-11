"use client";
import type { Video } from "@/types/youtube";
import { VideoCard } from "@/components/VideoCard";
export function VideoList({ videos, completed, onToggle }: { videos: Video[]; completed: string[]; onToggle: (id: string) => void }) { return <section><div className="mb-4 flex items-baseline justify-between"><h2 className="text-xl font-bold">Course lessons</h2><span className="text-sm text-slate-500">{videos.length} total</span></div><div className="space-y-3">{videos.map((video) => <VideoCard key={video.playlistItemId} video={video} complete={completed.includes(video.id)} onToggle={() => onToggle(video.id)}/>)}</div></section>; }
