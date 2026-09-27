import React from 'react'
import { Rnd } from 'react-rnd'
import "./window.scss"
const Macwindow = ({children , width = "40vw" , height = "50vh",windowName,setwindowState}) => {
  return (
    <Rnd
    default={{
      width : width,
      height : height,
      x : 300,
      y: 200
    }}>
      <div className="window">
        <div className="nav">
            <div className="dots">
                <div onClick={()=>{
          setwindowState(state=>({...state, [windowName] :false}))}} className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
                
        
            </div>
            <div className="title">Ayush kaushik -zsh</div>
            </div>
        <div className="main-content">
            {children}
        </div>
      </div>
    </Rnd>
  )
}

export default Macwindow
