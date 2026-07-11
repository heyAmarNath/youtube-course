import Link from "next/link";

export default function NotFound() { return <main className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 text-center"><p className="text-sm font-semibold uppercase tracking-[.88px] text-[#f54e00]">404</p><h1 className="mt-3 text-3xl font-normal tracking-tight">This page doesn’t exist.</h1><Link href="/" className="mt-7 h-10 rounded-md bg-[#f54e00] px-5 py-3 text-sm font-medium text-white">Go home</Link></main>; }
