import React from 'react'
import TrackSchema from '../../../../../utils/interfaces/Track'
import Song from '../../../../Home/Song/Song'
import "./TopResult.css"

function TopResult(data: TrackSchema) {
    const temp = {
        artists: data.artists,
        img: data.images,
        key: data.key,
        subtitle: data.subtitle,
        title: data.title,
        type: data.type,
        url: data.url
    }
  return (
    <div className='top-res-container'>
        <h1 className='top-res-title'>Top Result</h1>
        <Song {...temp}/>
    </div>
  )
}

export default TopResult