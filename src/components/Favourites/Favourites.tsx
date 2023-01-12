import React from 'react'
import { useStateValue } from '../../utils/contexts/StateProvider'
import './Favourites.css'
import Song from '../Home/Song/Song';

function Favourites() {
    const data =JSON.parse(localStorage.getItem('fav')!);
    console.log(data);
    return (
    <div className='favorites-container'>
        <div className='title'>
            <h1>Favorites</h1>
            <div className='line'/>
        </div>
        <div className='favourites-wrap'>
        {Object.keys(data).map((value: string, index: number) => {
            return <Song {...data[index]}/>
        })}
        </div>
    </div>
  )
}

export default Favourites