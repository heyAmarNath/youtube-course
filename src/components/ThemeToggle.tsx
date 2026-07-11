"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(true);
  useEffect(() => { const saved = localStorage.getItem("youtube-course-theme"); const enabled = saved ? saved === "dark" : true; setDark(enabled); document.documentElement.classList.toggle("dark", enabled); }, []);
  function toggle() { const next = !dark; setDark(next); document.documentElement.classList.toggle("dark", next); localStorage.setItem("youtube-course-theme", next ? "dark" : "light"); }
  return <button onClick={toggle} aria-label="Toggle dark mode" className="flex h-10 w-10 items-center justify-center rounded-md border border-[#cfcdc4] bg-white text-[#26251e]">{dark ? <Sun className="h-4 w-4"/> : <Moon className="h-4 w-4"/>}</button>;
}
