import React from 'react'
import './Search.css'
import Searchbar from './Searchbar/Searchbar'
import SearchResults from './SearchResults/SearchResults'

const Search = () => {
const MOCK_DATA = {
    "tracks": {
        "hits": [
            {
                "track": {
                    "layout": "5",
                    "type": "MUSIC",
                    "key": "454122803",
                    "title": "\"N\"",
                    "subtitle": "FENOMENO",
                    "share": {
                        "subject": "\"N\" - FENOMENO",
                        "text": "I used Shazam to discover \"N\" by FENOMENO.",
                        "href": "https://www.shazam.com/track/454122803/n",
                        "image": "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/ed/62/ba/ed62ba6f-fe4c-45ef-d6f4-5f31d7372e42/859754643854_cover.png/400x400cc.jpg",
                        "twitter": "I used @Shazam to discover \"N\" by FENOMENO.",
                        "html": "https://www.shazam.com/snippets/email-share/454122803?lang=en-US&country=US",
                        "snapchat": "https://www.shazam.com/partner/sc/track/454122803"
                    },
                    "images": {
                        "background": "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/ed/62/ba/ed62ba6f-fe4c-45ef-d6f4-5f31d7372e42/859754643854_cover.png/400x400cc.jpg",
                        "coverart": "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/ed/62/ba/ed62ba6f-fe4c-45ef-d6f4-5f31d7372e42/859754643854_cover.png/400x400cc.jpg",
                        "coverarthq": "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/ed/62/ba/ed62ba6f-fe4c-45ef-d6f4-5f31d7372e42/859754643854_cover.png/400x400cc.jpg",
                        "joecolor": "b:1e2223p:f0e4d8s:cbc0bdt:c6bdb4q:a8a09e"
                    },
                    "hub": {
                        "type": "APPLEMUSIC",
                        "image": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic_{scalefactor}.png",
                        "actions": [
                            {
                                "name": "apple",
                                "type": "applemusicplay",
                                "id": "1447711940"
                            },
                            {
                                "name": "apple",
                                "type": "uri",
                                "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/8e/1c/a4/8e1ca464-dd21-a10f-8708-2b8a0f7d2aa2/mzaf_269079427456673912.plus.aac.ep.m4a"
                            }
                        ],
                        "options": [
                            {
                                "caption": "OPEN",
                                "actions": [
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "applemusicopen",
                                        "uri": "https://music.apple.com/us/album/n/1447711933?i=1447711940&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                    },
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "uri",
                                        "uri": "https://music.apple.com/us/album/n/1447711933?i=1447711940&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                    }
                                ],
                                "beacondata": {
                                    "type": "open",
                                    "providername": "applemusic"
                                },
                                "image": "https://images.shazam.com/static/icons/hub/ios/v5/overflow-open-option_{scalefactor}.png",
                                "type": "open",
                                "listcaption": "Open in Apple Music",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic-overflow_{scalefactor}.png",
                                "colouroverflowimage": false,
                                "providername": "applemusic"
                            },
                            {
                                "caption": "BUY",
                                "actions": [
                                    {
                                        "type": "uri",
                                        "uri": "https://itunes.apple.com/us/album/n/1447711933?i=1447711940&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=itunes&itsct=Shazam_ios"
                                    }
                                ],
                                "beacondata": {
                                    "type": "buy",
                                    "providername": "itunes"
                                },
                                "image": "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
                                "type": "buy",
                                "listcaption": "Buy on iTunes",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
                                "colouroverflowimage": false,
                                "providername": "itunes"
                            }
                        ],
                        "providers": [
                            {
                                "caption": "Open in Spotify",
                                "images": {
                                    "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/spotify-overflow_{scalefactor}.png",
                                    "default": "https://images.shazam.com/static/icons/hub/ios/v5/spotify_{scalefactor}.png"
                                },
                                "actions": [
                                    {
                                        "name": "hub:spotify:searchdeeplink",
                                        "type": "uri",
                                        "uri": "spotify:search:%22N%22%20FENOMENO"
                                    }
                                ],
                                "type": "SPOTIFY"
                            },
                            {
                                "caption": "Open in Deezer",
                                "images": {
                                    "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/deezer-overflow_{scalefactor}.png",
                                    "default": "https://images.shazam.com/static/icons/hub/ios/v5/deezer_{scalefactor}.png"
                                },
                                "actions": [
                                    {
                                        "name": "hub:deezer:searchdeeplink",
                                        "type": "uri",
                                        "uri": "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27%22N%22%27%20artist%3A%27FENOMENO%27%7D"
                                    }
                                ],
                                "type": "DEEZER"
                            }
                        ],
                        "explicit": false,
                        "displayname": "APPLE MUSIC"
                    },
                    "artists": [
                        {
                            "id": "42",
                            "adamid": "1447711938"
                        }
                    ],
                    "url": "https://www.shazam.com/track/454122803/n"
                }
            },
            {
                "track": {
                    "layout": "5",
                    "type": "MUSIC",
                    "key": "470738021",
                    "title": "N",
                    "subtitle": "Jaden",
                    "share": {
                        "subject": "N - Jaden",
                        "text": "I used Shazam to discover N by Jaden.",
                        "href": "https://www.shazam.com/track/470738021/n",
                        "image": "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/77/06/88/7706885a-69e8-b1a7-4943-6410caebc008/19UMGIM38310.rgb.jpg/400x400cc.jpg",
                        "twitter": "I used @Shazam to discover N by Jaden.",
                        "html": "https://www.shazam.com/snippets/email-share/470738021?lang=en-US&country=US",
                        "avatar": "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/ae/48/06/ae48066c-4f91-4fcf-10da-00692004ffdd/pr_source.png/800x800cc.jpg",
                        "snapchat": "https://www.shazam.com/partner/sc/track/470738021"
                    },
                    "images": {
                        "background": "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/ae/48/06/ae48066c-4f91-4fcf-10da-00692004ffdd/pr_source.png/800x800cc.jpg",
                        "coverart": "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/77/06/88/7706885a-69e8-b1a7-4943-6410caebc008/19UMGIM38310.rgb.jpg/400x400cc.jpg",
                        "coverarthq": "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/77/06/88/7706885a-69e8-b1a7-4943-6410caebc008/19UMGIM38310.rgb.jpg/400x400cc.jpg",
                        "joecolor": "b:cb77c4p:17090ds:211016t:3b1f31q:432539"
                    },
                    "hub": {
                        "type": "APPLEMUSIC",
                        "image": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic_{scalefactor}.png",
                        "actions": [
                            {
                                "name": "apple",
                                "type": "applemusicplay",
                                "id": "1470177838"
                            },
                            {
                                "name": "apple",
                                "type": "uri",
                                "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c6/6a/52/c66a52ab-20b9-54fa-ead7-f8ea9e178a1f/mzaf_10931830030141927115.plus.aac.ep.m4a"
                            }
                        ],
                        "options": [
                            {
                                "caption": "OPEN",
                                "actions": [
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "applemusicopen",
                                        "uri": "https://music.apple.com/us/album/n/1470177631?i=1470177838&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                    },
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "uri",
                                        "uri": "https://music.apple.com/us/album/n/1470177631?i=1470177838&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                    }
                                ],
                                "beacondata": {
                                    "type": "open",
                                    "providername": "applemusic"
                                },
                                "image": "https://images.shazam.com/static/icons/hub/ios/v5/overflow-open-option_{scalefactor}.png",
                                "type": "open",
                                "listcaption": "Open in Apple Music",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic-overflow_{scalefactor}.png",
                                "colouroverflowimage": false,
                                "providername": "applemusic"
                            },
                            {
                                "caption": "BUY",
                                "actions": [
                                    {
                                        "type": "uri",
                                        "uri": "https://itunes.apple.com/us/album/n/1470177631?i=1470177838&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=itunes&itsct=Shazam_ios"
                                    }
                                ],
                                "beacondata": {
                                    "type": "buy",
                                    "providername": "itunes"
                                },
                                "image": "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
                                "type": "buy",
                                "listcaption": "Buy on iTunes",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
                                "colouroverflowimage": false,
                                "providername": "itunes"
                            }
                        ],
                        "providers": [
                            {
                                "caption": "Open in Spotify",
                                "images": {
                                    "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/spotify-overflow_{scalefactor}.png",
                                    "default": "https://images.shazam.com/static/icons/hub/ios/v5/spotify_{scalefactor}.png"
                                },
                                "actions": [
                                    {
                                        "name": "hub:spotify:searchdeeplink",
                                        "type": "uri",
                                        "uri": "spotify:search:N%20Jaden"
                                    }
                                ],
                                "type": "SPOTIFY"
                            },
                            {
                                "caption": "Open in Deezer",
                                "images": {
                                    "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/deezer-overflow_{scalefactor}.png",
                                    "default": "https://images.shazam.com/static/icons/hub/ios/v5/deezer_{scalefactor}.png"
                                },
                                "actions": [
                                    {
                                        "name": "hub:deezer:searchdeeplink",
                                        "type": "uri",
                                        "uri": "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27N%27%20artist%3A%27Jaden%27%7D"
                                    }
                                ],
                                "type": "DEEZER"
                            }
                        ],
                        "explicit": true,
                        "displayname": "APPLE MUSIC"
                    },
                    "artists": [
                        {
                            "id": "42",
                            "adamid": "280708839"
                        }
                    ],
                    "url": "https://www.shazam.com/track/470738021/n"
                }
            },
            {
                "track": {
                    "layout": "5",
                    "type": "MUSIC",
                    "key": "571325107",
                    "title": "N",
                    "subtitle": "Madd",
                    "share": {
                        "subject": "N - Madd",
                        "text": "I used Shazam to discover N by Madd.",
                        "href": "https://www.shazam.com/track/571325107/n",
                        "image": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/7a/02/36/7a023689-724f-0162-59dc-200b526a247e/cover.jpg/400x400cc.jpg",
                        "twitter": "I used @Shazam to discover N by Madd.",
                        "html": "https://www.shazam.com/snippets/email-share/571325107?lang=en-US&country=US",
                        "avatar": "https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/62/a8/d8/62a8d85f-349a-112d-6caa-b3e87b9c684c/mza_16509417544261414834.png/800x800cc.jpg",
                        "snapchat": "https://www.shazam.com/partner/sc/track/571325107"
                    },
                    "images": {
                        "background": "https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/62/a8/d8/62a8d85f-349a-112d-6caa-b3e87b9c684c/mza_16509417544261414834.png/800x800cc.jpg",
                        "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/7a/02/36/7a023689-724f-0162-59dc-200b526a247e/cover.jpg/400x400cc.jpg",
                        "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/7a/02/36/7a023689-724f-0162-59dc-200b526a247e/cover.jpg/400x400cc.jpg",
                        "joecolor": "b:000000p:ffffffs:46c97at:cbcbcbq:38a161"
                    },
                    "hub": {
                        "type": "APPLEMUSIC",
                        "image": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic_{scalefactor}.png",
                        "actions": [
                            {
                                "name": "apple",
                                "type": "applemusicplay",
                                "id": "1568606446"
                            },
                            {
                                "name": "apple",
                                "type": "uri",
                                "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c8/c2/08/c8c20890-66c1-8fb9-60cb-49faffedcc55/mzaf_12338944616911322000.plus.aac.ep.m4a"
                            }
                        ],
                        "options": [
                            {
                                "caption": "OPEN",
                                "actions": [
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "applemusicopen",
                                        "uri": "https://music.apple.com/us/album/n/1568606441?i=1568606446&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                    },
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "uri",
                                        "uri": "https://music.apple.com/us/album/n/1568606441?i=1568606446&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                    }
                                ],
                                "beacondata": {
                                    "type": "open",
                                    "providername": "applemusic"
                                },
                                "image": "https://images.shazam.com/static/icons/hub/ios/v5/overflow-open-option_{scalefactor}.png",
                                "type": "open",
                                "listcaption": "Open in Apple Music",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic-overflow_{scalefactor}.png",
                                "colouroverflowimage": false,
                                "providername": "applemusic"
                            },
                            {
                                "caption": "BUY",
                                "actions": [
                                    {
                                        "type": "uri",
                                        "uri": "https://itunes.apple.com/us/album/n/1568606441?i=1568606446&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=itunes&itsct=Shazam_ios"
                                    }
                                ],
                                "beacondata": {
                                    "type": "buy",
                                    "providername": "itunes"
                                },
                                "image": "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
                                "type": "buy",
                                "listcaption": "Buy on iTunes",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
                                "colouroverflowimage": false,
                                "providername": "itunes"
                            }
                        ],
                        "providers": [
                            {
                                "caption": "Open in Spotify",
                                "images": {
                                    "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/spotify-overflow_{scalefactor}.png",
                                    "default": "https://images.shazam.com/static/icons/hub/ios/v5/spotify_{scalefactor}.png"
                                },
                                "actions": [
                                    {
                                        "name": "hub:spotify:searchdeeplink",
                                        "type": "uri",
                                        "uri": "spotify:search:N%20Madd"
                                    }
                                ],
                                "type": "SPOTIFY"
                            },
                            {
                                "caption": "Open in Deezer",
                                "images": {
                                    "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/deezer-overflow_{scalefactor}.png",
                                    "default": "https://images.shazam.com/static/icons/hub/ios/v5/deezer_{scalefactor}.png"
                                },
                                "actions": [
                                    {
                                        "name": "hub:deezer:searchdeeplink",
                                        "type": "uri",
                                        "uri": "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27N%27%20artist%3A%27Madd%27%7D"
                                    }
                                ],
                                "type": "DEEZER"
                            }
                        ],
                        "explicit": false,
                        "displayname": "APPLE MUSIC"
                    },
                    "artists": [
                        {
                            "id": "42",
                            "adamid": "1462672688"
                        }
                    ],
                    "url": "https://www.shazam.com/track/571325107/n"
                }
            },
            {
                "track": {
                    "layout": "5",
                    "type": "MUSIC",
                    "key": "523111623",
                    "title": "N",
                    "subtitle": "Docman",
                    "share": {
                        "subject": "N - Docman",
                        "text": "I used Shazam to discover N by Docman.",
                        "href": "https://www.shazam.com/track/523111623/n",
                        "image": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/4a/36/6b/4a366b7d-67ae-d5fc-308a-ae9f7e3bc997/195079208447.jpg/400x400cc.jpg",
                        "twitter": "I used @Shazam to discover N by Docman.",
                        "html": "https://www.shazam.com/snippets/email-share/523111623?lang=en-US&country=US",
                        "avatar": "https://is4-ssl.mzstatic.com/image/thumb/AMCArtistImages122/v4/0a/2e/02/0a2e02e0-1814-ff86-6ea5-1a69a3612940/341a0686-f744-49fc-bae5-3e5f42c8bd02_file_cropped.png/800x800cc.jpg",
                        "snapchat": "https://www.shazam.com/partner/sc/track/523111623"
                    },
                    "images": {
                        "background": "https://is4-ssl.mzstatic.com/image/thumb/AMCArtistImages122/v4/0a/2e/02/0a2e02e0-1814-ff86-6ea5-1a69a3612940/341a0686-f744-49fc-bae5-3e5f42c8bd02_file_cropped.png/800x800cc.jpg",
                        "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/4a/36/6b/4a366b7d-67ae-d5fc-308a-ae9f7e3bc997/195079208447.jpg/400x400cc.jpg",
                        "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/4a/36/6b/4a366b7d-67ae-d5fc-308a-ae9f7e3bc997/195079208447.jpg/400x400cc.jpg",
                        "joecolor": "b:13181bp:f8fdffs:efbe32t:cacfd1q:c39d2e"
                    },
                    "hub": {
                        "type": "APPLEMUSIC",
                        "image": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic_{scalefactor}.png",
                        "actions": [
                            {
                                "name": "apple",
                                "type": "applemusicplay",
                                "id": "1515054624"
                            },
                            {
                                "name": "apple",
                                "type": "uri",
                                "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/d9/46/e5/d946e564-825a-9fdd-4856-e83d97dfdede/mzaf_2397886264548244813.plus.aac.ep.m4a"
                            }
                        ],
                        "options": [
                            {
                                "caption": "OPEN",
                                "actions": [
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "applemusicopen",
                                        "uri": "https://music.apple.com/us/album/n/1515054618?i=1515054624&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                    },
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "uri",
                                        "uri": "https://music.apple.com/us/album/n/1515054618?i=1515054624&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                    }
                                ],
                                "beacondata": {
                                    "type": "open",
                                    "providername": "applemusic"
                                },
                                "image": "https://images.shazam.com/static/icons/hub/ios/v5/overflow-open-option_{scalefactor}.png",
                                "type": "open",
                                "listcaption": "Open in Apple Music",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic-overflow_{scalefactor}.png",
                                "colouroverflowimage": false,
                                "providername": "applemusic"
                            },
                            {
                                "caption": "BUY",
                                "actions": [
                                    {
                                        "type": "uri",
                                        "uri": "https://itunes.apple.com/us/album/n/1515054618?i=1515054624&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=itunes&itsct=Shazam_ios"
                                    }
                                ],
                                "beacondata": {
                                    "type": "buy",
                                    "providername": "itunes"
                                },
                                "image": "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
                                "type": "buy",
                                "listcaption": "Buy on iTunes",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
                                "colouroverflowimage": false,
                                "providername": "itunes"
                            }
                        ],
                        "providers": [
                            {
                                "caption": "Open in Spotify",
                                "images": {
                                    "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/spotify-overflow_{scalefactor}.png",
                                    "default": "https://images.shazam.com/static/icons/hub/ios/v5/spotify_{scalefactor}.png"
                                },
                                "actions": [
                                    {
                                        "name": "hub:spotify:searchdeeplink",
                                        "type": "uri",
                                        "uri": "spotify:search:N%20Docman"
                                    }
                                ],
                                "type": "SPOTIFY"
                            },
                            {
                                "caption": "Open in Deezer",
                                "images": {
                                    "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/deezer-overflow_{scalefactor}.png",
                                    "default": "https://images.shazam.com/static/icons/hub/ios/v5/deezer_{scalefactor}.png"
                                },
                                "actions": [
                                    {
                                        "name": "hub:deezer:searchdeeplink",
                                        "type": "uri",
                                        "uri": "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27N%27%20artist%3A%27Docman%27%7D"
                                    }
                                ],
                                "type": "DEEZER"
                            }
                        ],
                        "explicit": true,
                        "displayname": "APPLE MUSIC"
                    },
                    "artists": [
                        {
                            "id": "42",
                            "adamid": "865613126"
                        }
                    ],
                    "url": "https://www.shazam.com/track/523111623/n"
                }
            },
            {
                "track": {
                    "layout": "5",
                    "type": "MUSIC",
                    "key": "525002312",
                    "title": "N",
                    "subtitle": "AL3JANDRO",
                    "share": {
                        "subject": "N - AL3JANDRO",
                        "text": "I used Shazam to discover N by AL3JANDRO.",
                        "href": "https://www.shazam.com/track/525002312/n",
                        "image": "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/84/3a/75/843a75a4-2884-f149-c5d0-b54296699b0e/artwork.jpg/400x400cc.jpg",
                        "twitter": "I used @Shazam to discover N by AL3JANDRO.",
                        "html": "https://www.shazam.com/snippets/email-share/525002312?lang=en-US&country=US",
                        "avatar": "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/a9/13/4d/a9134daa-7b91-0339-b1d4-9ba6c6cc4e2a/pr_source.png/800x800cc.jpg",
                        "snapchat": "https://www.shazam.com/partner/sc/track/525002312"
                    },
                    "images": {
                        "background": "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/a9/13/4d/a9134daa-7b91-0339-b1d4-9ba6c6cc4e2a/pr_source.png/800x800cc.jpg",
                        "coverart": "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/84/3a/75/843a75a4-2884-f149-c5d0-b54296699b0e/artwork.jpg/400x400cc.jpg",
                        "coverarthq": "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/84/3a/75/843a75a4-2884-f149-c5d0-b54296699b0e/artwork.jpg/400x400cc.jpg",
                        "joecolor": "b:ac1a20p:ffffffs:ffe0f0t:eed1d2q:eeb8c6"
                    },
                    "hub": {
                        "type": "APPLEMUSIC",
                        "image": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic_{scalefactor}.png",
                        "actions": [
                            {
                                "name": "apple",
                                "type": "applemusicplay",
                                "id": "1517298896"
                            },
                            {
                                "name": "apple",
                                "type": "uri",
                                "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/ad/65/8f/ad658f6a-1626-e74f-59ca-72f335cd10a4/mzaf_17854594943497201242.plus.aac.ep.m4a"
                            }
                        ],
                        "options": [
                            {
                                "caption": "OPEN",
                                "actions": [
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "applemusicopen",
                                        "uri": "https://music.apple.com/us/album/n/1517298895?i=1517298896&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                    },
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "uri",
                                        "uri": "https://music.apple.com/us/album/n/1517298895?i=1517298896&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
                                    }
                                ],
                                "beacondata": {
                                    "type": "open",
                                    "providername": "applemusic"
                                },
                                "image": "https://images.shazam.com/static/icons/hub/ios/v5/overflow-open-option_{scalefactor}.png",
                                "type": "open",
                                "listcaption": "Open in Apple Music",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic-overflow_{scalefactor}.png",
                                "colouroverflowimage": false,
                                "providername": "applemusic"
                            },
                            {
                                "caption": "BUY",
                                "actions": [
                                    {
                                        "type": "uri",
                                        "uri": "https://itunes.apple.com/us/album/n/1517298895?i=1517298896&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=itunes&itsct=Shazam_ios"
                                    }
                                ],
                                "beacondata": {
                                    "type": "buy",
                                    "providername": "itunes"
                                },
                                "image": "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
                                "type": "buy",
                                "listcaption": "Buy on iTunes",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
                                "colouroverflowimage": false,
                                "providername": "itunes"
                            }
                        ],
                        "providers": [
                            {
                                "caption": "Open in Spotify",
                                "images": {
                                    "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/spotify-overflow_{scalefactor}.png",
                                    "default": "https://images.shazam.com/static/icons/hub/ios/v5/spotify_{scalefactor}.png"
                                },
                                "actions": [
                                    {
                                        "name": "hub:spotify:searchdeeplink",
                                        "type": "uri",
                                        "uri": "spotify:search:N%20AL3JANDRO"
                                    }
                                ],
                                "type": "SPOTIFY"
                            },
                            {
                                "caption": "Open in Deezer",
                                "images": {
                                    "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/deezer-overflow_{scalefactor}.png",
                                    "default": "https://images.shazam.com/static/icons/hub/ios/v5/deezer_{scalefactor}.png"
                                },
                                "actions": [
                                    {
                                        "name": "hub:deezer:searchdeeplink",
                                        "type": "uri",
                                        "uri": "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27N%27%20artist%3A%27AL3JANDRO%27%7D"
                                    }
                                ],
                                "type": "DEEZER"
                            }
                        ],
                        "explicit": false,
                        "displayname": "APPLE MUSIC"
                    },
                    "artists": [
                        {
                            "id": "42",
                            "adamid": "1294103054"
                        }
                    ],
                    "url": "https://www.shazam.com/track/525002312/n"
                }
            }
        ]
    },
    "artists": {
        "hits": [
            {
                "artist": {
                    "avatar": "https://is2-ssl.mzstatic.com/image/thumb/Features125/v4/f0/16/c6/f016c607-9250-556a-70a5-599b3d0b4297/mzl.jkfhoubk.png/800x800bb.jpg",
                    "name": "VIXX",
                    "verified": false,
                    "weburl": "https://music.apple.com/us/artist/vixx/531227182",
                    "adamid": "531227182"
                }
            },
            {
                "artist": {
                    "avatar": "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/cd/31/56/cd315601-7d19-64e6-1749-a316e8dc1212/cover.jpg/800x800ac.jpg",
                    "name": "N",
                    "verified": false,
                    "weburl": "https://music.apple.com/us/artist/n/1118252107",
                    "adamid": "1118252107"
                }
            },
            {
                "artist": {
                    "avatar": "https://is5-ssl.mzstatic.com/image/thumb/Music5/v4/25/e9/25/25e92597-2685-6154-700d-e427855eb39f/812388026127.jpg/800x800ac.jpg",
                    "name": "Ñ",
                    "verified": false,
                    "weburl": "https://music.apple.com/us/artist/%C3%B1/982315890",
                    "adamid": "982315890"
                }
            },
            {
                "artist": {
                    "name": "\\N",
                    "verified": false,
                    "weburl": "https://music.apple.com/us/artist/n/1059083560",
                    "adamid": "1059083560"
                }
            },
            {
                "artist": {
                    "avatar": "https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/a2/20/c3/a220c3ac-9a30-1605-d6fd-1dc1dc867187/4580547326680.jpg/800x800ac.jpg",
                    "name": "N+",
                    "verified": false,
                    "weburl": "https://music.apple.com/us/artist/n/1503307506",
                    "adamid": "1503307506"
                }
            }
        ]
    }
}
  return (
    <div className='search-container'>
        <Searchbar/>
        <SearchResults {...MOCK_DATA}/>
    </div>
  )
}

export default Search