interface SingleArtistsSchema{
    artist:{
        avatar?: string | undefined,
        name?: string | undefined,
        verified?: boolean | undefined,
        weburl?: string | undefined,
        adamid?: string | undefined
    }
}

export default interface ArtistsSchema {
    hits: SingleArtistsSchema[]
}