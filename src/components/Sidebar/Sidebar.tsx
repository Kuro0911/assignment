import React from 'react'
import Heart from '../../utils/svg/Heart'
import HomeSvg from '../../utils/svg/HomeSvg'
import Play from '../../utils/svg/Play'
import Search from '../../utils/svg/Search'
import './Sidebar.css'
function Sidebar() {
  return (
    <div className='sidebar-container'>
      <div className='sidebar-wrapper'>
      <div className='text'>
        <HomeSvg/>
        <a href="/">Home</a>
      </div>
      <div className='text'>
        <Search/>
        <a href="/search">search</a>
      </div>
      <div className='text'>
        <Heart/>
        <a href="/favourites">favourites</a>
      </div>
      <div className='text'>
        <Play/>
        <a href="/playlists">playlists</a>
      </div>
      </div>
    </div>
  )
}

export default Sidebar