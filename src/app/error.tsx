"use client";

import { useEffect } from "react";

export default function ErrorBoundary({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error("Unhandled application error", error); }, [error]);
  return <main className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 text-center"><p className="text-sm font-semibold uppercase tracking-[.88px] text-[#f54e00]">Something went wrong</p><h1 className="mt-3 text-3xl font-normal tracking-tight">Please try again.</h1><p className="mt-3 text-[#807d72]">Your saved course progress is still safe in this browser.</p><button onClick={reset} className="mt-7 h-10 rounded-md bg-[#f54e00] px-5 text-sm font-medium text-white">Try again</button></main>;
}
