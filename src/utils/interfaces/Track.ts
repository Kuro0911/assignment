interface imageSchema {
    background: string,
    coverart: string,
    coverarthq: string,
    joecolor: string
}
export default interface TrackSchema {
    layout: string,
    type: string,
    key: string,
    title: string,
    subtitle: string,
    images: imageSchema,
    hub: object,
    share: object,
    artists: Object, 
    url: string
}