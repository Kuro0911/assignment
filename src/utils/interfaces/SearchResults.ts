import ArtistsSchema from "./Artists";
import TrackSchema from "./Track";

export default interface SearchSchema {
    tracks: {
        hits: {track:TrackSchema}[]
    },
    artists: ArtistsSchema,
}