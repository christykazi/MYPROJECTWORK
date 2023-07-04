import React from 'react'
import './works.scss'
// import {MdInstallMobile} from "react-icons/md"
import {BsBoxArrowDown} from "react-icons/bs"
import {useState} from "react"

const Works = () => {
  const[currentSlide,setCurrentSlide] = useState(0)

  const data =[
    {
      id:"1",
      icon: "https://github.com/safak/youtube/blob/react-portfolio/public/assets/mobile.png?raw=true",
      title: "Web Application",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos veritatis quae velit ex voluptate.",
      img: "https://cdn.dribbble.com/userupload/4674677/file/original-ecc4eae6c9189046ccf28f9008a6c585.png?compress=1&resize=320x240&vertical=center",
    },
    {
      id:"2",
      icon: "https://github.com/safak/youtube/blob/react-portfolio/public/assets/globe.png?raw=true",
      title: "mobile Application",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos veritatis quae velit ex voluptate.",
      img: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id:"3",
      icon: "https://github.com/safak/youtube/blob/react-portfolio/public/assets/mobile.png?raw=true",
      title: "Branding",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos veritatis quae velit ex voluptate.",
      img: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ]
 
  const handleClick =(way) => {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) : setCurrentSlide(currentSlide < data.length - 1 ?currentSlide + 1 : 0)
  } 
  
  return (
    <div className='works' id='works'>
    <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>

{data.map((d) =>(  <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftcontainer">
                <div className="imgcontainer">
                <img src={d.icon} alt="" />
             {/*   { <MdInstallMobile/> } */}
               </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <span>Projects</span>
                </div>
            </div>
            <div className="right">
              <img src=" https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=600" 
               alt="" />

              {/*
             
              https://images.pexels.com/photos/4965825/pexels-photo-4965825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 */}

            </div>
             </div>

        </div> ))}

      </div>
       <img src="https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/arrow.png" className='arrow left' alt="" onClick={()=>handleClick("left")}/>
       
      <img src="https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/arrow.png" className='arrow right' alt="" onClick={()=>handleClick()}/>
      <div>
             <a href="#testimonials">
      <BsBoxArrowDown/>
      </a>
             </div>
     
      </div>      
    
  )
}

export default Works