import React from 'react'
import SongSchema from '../../../utils/interfaces/Song'
import './Song.css';
const Song = (data: SongSchema) => {
  console.log(data);
  return (
    <div className="container">
      <img src={data.img.coverart} alt=""/>
      <span>{data.title}</span>
    </div>
  )
}
export default Song