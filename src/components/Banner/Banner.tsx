import React from 'react'
import './Banner.css'
import bannerPng from "../../utils/images/banner.png"
function Banner() {
  return (
    <div className='banner-wrapper'>
      <img className= "banner-img" src={bannerPng} alt=""/>
    </div>
  )
}

export default Banner