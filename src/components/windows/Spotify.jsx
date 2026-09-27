import React from 'react'
import Macwindow from './macwindow'
import "./spotify.scss"
const Spotify = ({windowName,setwindowState}) => {
  return (
    <Macwindow windowName={windowName} setwindowState={setwindowState}  width='30vw'>
        <div className='Spotify-window'>
        <iframe style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/playlist/37i9dQZF1E4oJSdHZrVjxD?utm_source=generator&theme=0&si=64884ee8814b4a8b"  width="100%" height="352" frameBorder="0"  allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </Macwindow>
  )
}

export default Spotify
