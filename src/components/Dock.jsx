import React from 'react'
import './dock.scss'

const Dock = ({windowState,setwindowState}) => {
  return (
    <div>
      <footer className='Dock'>
        <div onClick={()=>{
          setwindowState(state=>({...state, Github :true}))}}
          className="icons github">
            <img src="/doc-icons/github.svg" alt="" />
        </div>
        <div onClick={()=>{
          window.open("https://calendar.google.com/","_blank")}}
      
         className="icons calendar">
            <img src="/doc-icons/calendar.svg" alt="" />
        </div>
        <div onClick={()=>{
          window.open("https://www.instagram.com/","_blank")}}
         className="icons link">
            <img src="/doc-icons/link.svg" alt="" />
        </div>
        <div onClick={()=>{
          window.open("https://mail.google.com/","_blank")
        }} className="icons mail">
            <img src="/doc-icons/mail.svg" alt="" />
        </div>
        <div onClick={()=>{
          setwindowState(state=>({...state, Notes :true}))}} className="icons note">
            <img src="/doc-icons/note.svg" alt="" />
        </div>

        <div
        onClick={()=>{
          setwindowState(state=>({...state, Pdf :true}))}}
         className="icons pdf">
          
            <img src="/doc-icons/pdf.svg" alt="" />
        </div>
        <div onClick={()=>{
          setwindowState(state=>({...state, Spotify :true}))}} 
          className="icons spotify">
          <img src="/doc-icons/spotify.svg" alt="" />
        </div>
        <div onClick={()=>{
          setwindowState(state=>({...state, Cli :true}))}}  className="icons cli">
            <img src="/doc-icons/cli.svg" alt="" />
        </div>
      </footer>
    </div>
  )
}

export default Dock
