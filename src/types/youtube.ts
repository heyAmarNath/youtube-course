export interface Thumbnail { url: string; width?: number; height?: number; }
export interface Playlist { id: string; title: string; description: string; channelTitle: string; thumbnail: Thumbnail; itemCount: number; }
export interface Video { id: string; playlistItemId: string; title: string; thumbnail: Thumbnail; duration: string; durationSeconds: number; position: number; }
export interface PlaylistStatistics { totalSeconds: number; videoCount: number; }
export interface CourseProgress { completedVideos: string[]; }
export interface StoredCourse { playlistId: string; title: string; channel: string; thumbnailUrl: string; videoCount: number; dailyTargetMinutes: number; completedVideos: string[]; createdAt: string; lastOpenedAt: string; completedAt?: string; }
export interface CourseData { courses: Record<string, StoredCourse>; }

export interface YouTubePlaylistResponse { items: Array<{ id: string; snippet: { title: string; description: string; channelTitle: string; thumbnails: Record<string, Thumbnail>; }; contentDetails: { itemCount: number } }>; }
export interface YouTubePlaylistItemsResponse { nextPageToken?: string; items: Array<{ id: string; snippet: { resourceId: { videoId: string }; title: string; thumbnails: Record<string, Thumbnail>; position: number } }>; }
export interface YouTubeVideosResponse { items: Array<{ id: string; snippet: { title: string; thumbnails: Record<string, Thumbnail> }; contentDetails: { duration: string } }>; }
