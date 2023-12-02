import React ,{useEffect, useState} from 'react'
import { imgUrl } from '../../constants/constants'
import axios from '../../axios'
import './RowPost.css'
function RowPost(props) {
    const [movie, setMovie] = useState([])
    useEffect(() => {
      axios.get(props.url).then((response) => {
        console.log(response.data.results)
        setMovie(response.data.results)
      })
    },[props.url])
    
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movie.map((obj) =>{
                    return(
                        <img className={props.isSmall ? 'smallPoster' :'poster'} alt='poster' src={`${imgUrl+obj.backdrop_path}`}/>
                    )
                })}
                
            </div>
        </div>
    )
}

export default RowPost