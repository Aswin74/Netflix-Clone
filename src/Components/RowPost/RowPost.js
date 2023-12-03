import React, { useEffect, useState } from 'react'
import { imgUrl ,API_KEY} from '../../constants/constants'
import axios from '../../axios'
import './RowPost.css'
import YouTube from 'react-youtube'
function RowPost(props) {
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    }


    const [movie, setMovie] = useState([]) //setting initial state for movie array 
    const [urlId, setUrlId] = useState('') //setting initial state for youtube url
    useEffect(() => { // to iterate through the json data
        axios.get(props.url).then((response) => { //axios -> to get data from API; added baseUrl in axios.js; get has a .then(response)
            console.log(response.data.results)
            setMovie(response.data.results) //array of data
        })
    }, [props.url]) 

    const handleMovie = (id) =>{ //method for getting the id of clicked element def below
        console.log(id)
        axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then(response => {
            console.log(response.data)

            if(response.data.results.length !== 0){ //handling the error if the get value of result array is zero
                setUrlId(response.data.results[0]) //results[0] contains id
            }else{
                console.log('No Trailer')
            }
        }) //getting the req from api for yotube id(postman0
    }

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movie.map((obj) => {
                    return (
                        <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imgUrl + obj.backdrop_path}`} />
                    )
                })}
            </div>
            { urlId && <YouTube videoId={urlId.key} opts={opts} />}
        </div>
    )
}

export default RowPost