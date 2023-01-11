interface imageSchema{
    background:string,
    coverart:string,
    coverarthq: string
}

export default interface SongSchema {
    artists: Object,
    img: imageSchema,
    key: string,
    subtitle: string,
    title: string,
    type: string,
    url: string
}