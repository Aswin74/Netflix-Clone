import React, {useEffect, useState} from 'react'
import { API_KEY , imgUrl} from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'
function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/movie/day?language=en-US&api_key=${API_KEY}`).then((response) => {
            console.log(response.data.results[4])
            setMovie(response.data.results[4])
        })
    },[]) //should only once it is mounted-> empty array othervice para pass
    return (
        <div style={{ backgroundImage:`url(${movie ? imgUrl+movie.backdrop_path : ''})`}}
            className='banner'>
            <div className='content' >
                <h1 className='title'>{movie ? movie.title : ''} </h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{movie ? movie.overview : ''} </h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner