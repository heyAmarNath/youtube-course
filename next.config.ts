import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Content-Security-Policy", value: "default-src 'self'; connect-src 'self' https://www.googleapis.com; img-src 'self' data: https://i.ytimg.com; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'" },
];
const nextConfig: NextConfig = {
  images: { remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com" }] },
  async headers() {
    // Next.js development uses eval-based source maps. Keep the strict CSP for deployed builds only.
    if (process.env.NODE_ENV !== "production") return [];
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};
export default nextConfig;
