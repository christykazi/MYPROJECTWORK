import React from 'react'
import "./topbar.scss"
import {BsFillFilePersonFill} from "react-icons/bs"
import { BsFillEnvelopeFill} from "react-icons/bs"

const Topbar = ({ menuOpen,setMenuOpen}) => {
  return (
    <div className={'topbar '+(menuOpen && ' active')}>
    <div className="wrapper">
      <div className="left">
        <a href="#intro" className='logo'>criXanna.</a>
        <div className="itemcontainer">
          {  <BsFillFilePersonFill/> }
          <span className='
          good'>+234-701-091-7437</span>
        </div>
        <div className="itemcontainer">
       {<BsFillEnvelopeFill/>}
          <span className='good'>agbaichristiana37@gmail.com</span>
        </div>
      </div>
      <div className="right">
        <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
          <span className='line1'></span>
          <span className='line2'></span>
          <span className='line3'></span>
        </div>
      </div>

    </div>

    </div>
  )
}

export default Topbar