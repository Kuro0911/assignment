import React from 'react'
import './SearchResults.css'
import SongList from './components/SongList/SongList'
import TopResult from './components/TopResult/TopResult'
import SearchSchema from '../../../utils/interfaces/SearchResults'
import ArtistsList from './components/ArtistsList/ArtistsList'

function SearchResults(data: SearchSchema) {
  return (
    <div className='search-res-container'>
        <div className='tracks'>
            <div className='top-res'>
                <TopResult {...data.tracks.hits[0].track}/>
            </div>
            <div className='all-tracks'>
                <SongList {...data.tracks.hits}/>
            </div>
        </div>
        <ArtistsList {...data.artists}/>
    </div>
  )
}

export default SearchResults