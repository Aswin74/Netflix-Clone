import React from 'react'
//import { API_KEY } from '../../constants/constants'

import './Banner.css'
function Banner() {
    /*useEffect(() => {
        axios.get(`3/trending/all/week?language=en-US&api_key=${API_KEY}`).then((response) => {
            console.log(response.data)
        })
    },[]) //should only once it is mounted-> empty array othervice para pass*/
    return (
        <div 
         className='banner'>
            <div className='content' >
                <h1 className='title'>Attack On Titan </h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>Netflix is a subscription-based streaming service that allows our members to watch TV shows
                and movies on an internet-connected device. Depending on your plan, you can also download TV shows and movies to your iOS,
                Android, or Windows 10 device and watch without an internet connection.</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner