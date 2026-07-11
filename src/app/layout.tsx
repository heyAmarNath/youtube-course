import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "YouTube Course", description: "Turn a YouTube playlist into a focused course tracker." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="dark" suppressHydrationWarning><body>{children}</body></html>;
}
