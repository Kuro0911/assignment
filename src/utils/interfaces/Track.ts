
interface imageSchema {
    background: string,
    coverart: string,
    coverarthq: string,
    joecolor: string
}
interface shareSchema {
    subject: string | undefined,
    text: string | undefined,
    href: string | undefined,
    image: string | undefined,
    twitter: string | undefined,
    html: string | undefined,
    avatar: string | undefined,
    snapchat: string | undefined
}
interface artistsSchema{
    id?: string ,
    adamid?: string
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