import { Clock } from "lucide-react";
import { formatDuration } from "@/lib/duration";
export function RemainingTimeCard({ seconds }: { seconds: number }) { return <section className="rounded-xl border border-[#e6e5e0] bg-white p-6"><Clock className="h-5 w-5 text-[#f54e00]"/><p className="mt-4 text-sm text-[#807d72]">Remaining course duration</p><p className="mt-1 text-2xl font-normal tracking-tight">{formatDuration(seconds)} remaining</p></section>; }
