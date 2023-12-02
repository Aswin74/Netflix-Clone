import React ,{useEffect, useState} from 'react'
import { API_KEY,imgUrl } from '../../constants/constants'
import axios from '../../axios'
import './RowPost.css'
function RowPost() {
    const [movie, setMovie] = useState()
    useEffect(() => {
      axios.get(`discover/tv?with_networks=213&api_key=${API_KEY}`).then((response) => {
        console.log(response.data.results)
        setMovie(response.data.results)
      })
    }, [])
    
    return (
        <div className='row'>
            <h2>Netflix Originals</h2>
            <div className='posters'>
                {movie.map((obj) =>{
                    return(
                        <img className='poster' alt='poster' src={`${imgUrl+obj.poster_path}`}/>
                    )
                })}
                
            </div>
        </div>
    )
}

export default RowPost