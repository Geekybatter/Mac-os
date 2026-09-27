import React from 'react'
import "./nav.scss" 
import Datetime from './Datetime'
const Nav = () => {
  return (
    <nav>
        <div className="left">
            <div className="apple">
                <img src="/nav-icons/apple.svg" alt="" />
            </div>
            <div className="finder">
                <h5>Finder</h5>
            </div>
            <div className="nav-item">
                File
            </div>
            <div className="nav-item">Edit</div>
            <div className="nav-item">View</div>
            <div className="nav-item">Terminal</div>
            <div className="nav-item">Help</div>
        </div>
        <div className="right">
            <div className="wifi">
                <img src = "/nav-icons/wifi.svg" alt="" />
            </div>
            <div className='time'>
            <Datetime/>
            </div>
            
        </div>
    </nav>



  )
}

export default Nav
