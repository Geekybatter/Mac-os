import React, { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/windows/Github'
import Notes from './components/windows/Notes'
import Pdf from './components/windows/Pdf'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'

const App = () => {

  const [windowState, setwindowState] = useState({
    Github : false,
    Notes : false,
    Pdf : false,
    Spotify : false,
    Cli : false,

  })

  return (
    <main>
      <Nav/>
      <Dock windowState = {windowState} setwindowState = {setwindowState}/>
      {windowState.Github&&<Github windowName = "Github" setwindowState = {setwindowState}/>}
      {windowState.Pdf&&<Pdf windowName = "Pdf" setwindowState = {setwindowState}/>}
      {windowState.Notes&&<Notes windowName = "Notes" setwindowState = {setwindowState}/>}
      {windowState.Spotify&&<Spotify windowName = "Spotify" setwindowState = {setwindowState}/>}
      {windowState.Cli&&<Cli windowName = "Cli" setwindowState = {setwindowState}/>}
      </main>
  )
}

export default App
 

