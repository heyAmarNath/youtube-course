"use client";
import { PartyPopper } from "lucide-react";
import { VideoCard } from "@/components/VideoCard";
import type { Video } from "@/types/youtube";
export function TodayPlan({ videos, completed, onToggle }: { videos: Video[]; completed: string[]; onToggle: (id: string) => void }) { if (!videos.length) return <section className="rounded-xl border border-[#e6e5e0] bg-white p-10 text-center"><PartyPopper className="mx-auto h-8 w-8 text-[#f54e00]"/><h2 className="mt-4 text-2xl font-normal tracking-tight">Course completed</h2><p className="mt-2 text-[#807d72]">Every lesson is checked off. Nicely done.</p></section>; return <section><div className="space-y-3">{videos.map((video) => <div id={`video-${video.playlistItemId}`} key={video.playlistItemId}><VideoCard video={video} complete={completed.includes(video.id)} onToggle={() => onToggle(video.id)}/></div>)}</div></section>; }
