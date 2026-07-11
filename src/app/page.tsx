"use client";
import { useEffect } from "react";
import { BookOpenCheck } from "lucide-react";
import { PlaylistForm } from "@/components/PlaylistForm";
import { CourseLibrary } from "@/components/CourseLibrary";
import { BackupButtons } from "@/components/BackupButtons";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useCourseStore } from "@/store/useCourseStore";
export default function HomePage() { const { courses, loadCourses, exportData, importData } = useCourseStore(); useEffect(() => { loadCourses(); }, [loadCourses]); return <main className="min-h-screen"><div className="mx-auto max-w-6xl px-5 sm:px-8"><header className="flex h-16 items-center justify-between border-b border-[#e6e5e0]"><div className="flex items-center gap-2 text-sm font-semibold"><span className="text-[#f54e00]"><BookOpenCheck className="h-5 w-5"/></span>YouTube Course</div><div className="flex items-center gap-2"><BackupButtons onExport={exportData} onImport={importData}/><ThemeToggle/></div></header><section className="py-16 sm:py-20"><p className="text-[11px] font-semibold uppercase tracking-[.88px] text-[#807d72]">Your learning library</p><h1 className="mt-4 max-w-3xl text-4xl font-normal tracking-[-1.5%] sm:text-6xl">Make a playlist your daily practice.</h1><p className="mt-5 max-w-xl text-base leading-7 text-[#5a5852]">Import a YouTube playlist, choose a daily learning target, and always know what to watch next.</p><div className="mt-8"><PlaylistForm/></div></section><CourseLibrary courses={Object.values(courses).sort((a, b) => b.lastOpenedAt.localeCompare(a.lastOpenedAt))}/></div></main>; }
