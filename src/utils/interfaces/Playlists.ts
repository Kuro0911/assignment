import TrackSchema from "./Track"
export default interface PlaylistSchema {
    title?: string,
    tracks?: TrackSchema[]
}