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

## Production deployment

1. Run `npm run check` locally or in CI before every release.
2. Deploy the app to a platform that supports Next.js, such as Vercel, Netlify, or a Node.js host.
3. Keep HTTPS enabled and do not commit browser backups or API keys.
4. Because this is a frontend-only app, users supply their own API key. Require them to restrict it to the YouTube Data API v3 and your production domain(s).

## Notes

- The API key is stored only in the current browser’s LocalStorage. Restrict it to the YouTube Data API v3 and appropriate HTTP referrers before using it in a public deployment.
- Private, deleted, region-restricted, or inaccessible videos may display as zero-length entries when YouTube omits their details.
- Course data is saved under `youtube-course-data` in LocalStorage and remains on the same browser/device.
