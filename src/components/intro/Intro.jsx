import React from 'react'
import './intro.scss'
// import { init } from 'ityped'
// import { useEffect, useRef} from 'react'
import {BsBoxArrowDown} from "react-icons/bs"
import PHO from './../asset/girlie.jpg'
const Intro = () => {
  // const textRef = useRef();

  // useEffect(() => {
  //   init(textRef.current, { showCursor: false, backDelay :1500,
  //     backSpeed: 60,
  //     showSpeed:true,
  //     strings: ['Developer', 'Designer', ], });
  // },[]);

  return (
    <div className='intro' id='intro'>
    <div className="left">
      <div className="imgContainer">
      <img src={PHO} alt="" />
       {/*  <img src="https://images.pexels.com/photos/10360423/pexels-photo-10360423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
      </div>
    </div>
    <div className="right">
      <div className="wrapper">
        <h2>Hi there, I'm</h2>
        <h1>Christiana Agbai</h1>
        <h3>FullStack Web <span>Developer </span></h3>
      </div >
      <a href="#portfolio">
      <BsBoxArrowDown/>
      </a>
     
    </div>
   
    </div>
  )
}

export default Intro