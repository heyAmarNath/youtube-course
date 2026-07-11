"use client";
import { AlertCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
export function ErrorState({ message }: { message: string }) { return <main className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 text-center"><div className="mb-5 rounded-full bg-rose-50 p-4 text-rose-600 dark:bg-rose-950"><AlertCircle className="h-8 w-8"/></div><h1 className="text-2xl font-bold">Couldn’t load playlist</h1><p className="mt-3 text-slate-600 dark:text-slate-400">{message}</p><Link href="/" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white"><ArrowLeft className="h-4 w-4"/>Try another playlist</Link></main>; }
