import type { Config } from "tailwindcss";

export default { darkMode: ["class"], content: ["./src/**/*.{ts,tsx}"], theme: { extend: { colors: { ink: "#111827" } } }, plugins: [] } satisfies Config;
