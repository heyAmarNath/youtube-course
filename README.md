# YouTube Course

A focused, browser-only YouTube playlist course tracker. Import a public playlist to see its total duration at 1x, 1.5x, and 2x speed, then tick off lessons as you complete them. Completion data stays in your browser's LocalStorage—there is no account, server, or database.

## Setup

1. Install dependencies: `npm install`
2. Create a YouTube Data API v3 key:
   - Open [Google Cloud Console](https://console.cloud.google.com/).
   - Create or select a project, then enable **YouTube Data API v3** under APIs & Services.
   - Create an API key under **Credentials**.
   - For a public deployment, restrict the key to your website's HTTP referrers and to the YouTube Data API v3.
3. Start the app: `npm run dev`
4. Enter the API key in the home-page import form. It is stored only in your browser’s LocalStorage.

Open `http://localhost:3000`, paste a standard playlist URL such as `https://www.youtube.com/playlist?list=PLAYLIST_ID`, and import it.

## Deploy to Cloudflare Pages

This project is configured for static export. It creates an `out/` directory during `npm run build`, ready for Cloudflare Pages.

1. Run `npm run check` locally.
2. Commit and push the repository to GitHub.
3. In Cloudflare, go to **Workers & Pages** → **Create application** → **Pages** → **Import an existing Git repository**.
4. Select this repository and choose the **Next.js (Static HTML Export)** framework preset.
5. Use these build settings:
   - Production branch: `main`
   - Build command: `npm run build`
   - Build output directory: `out`
6. Select **Save and Deploy**. Each push to `main` will deploy to production; pull requests receive preview deployments.

The course page uses a static URL with a query string, for example `/course/?playlistId=PLAYLIST_ID`. This allows any user-imported playlist to work on static hosting.

## Notes

- The API key is stored only in the current browser’s LocalStorage. Restrict it to the YouTube Data API v3 and your Cloudflare Pages domain before using it in public.
- Cloudflare Pages security headers are defined in `public/_headers` and copied into the static deployment.
- Private, deleted, region-restricted, or inaccessible videos may display as zero-length entries when YouTube omits their details.
- Course data is saved under `youtube-course-data` in LocalStorage and remains on the same browser/device.
