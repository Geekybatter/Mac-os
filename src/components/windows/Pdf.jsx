import React from 'react'
import Macwindow from './macwindow'
import "./pdf.scss"

const Pdf = ({windowName , setwindowState}) => {
  return (
    <Macwindow windowName={windowName} setwindowState={setwindowState}>
        <div className='resume-window'>
            <iframe src="/nav-icons/resume.pdf" frameBorder="0"></iframe>
        </div>
    </Macwindow>
  )
}

export default Pdf



