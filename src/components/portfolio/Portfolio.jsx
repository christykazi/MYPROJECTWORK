import React from 'react'
import {useEffect, useState} from 'react'
import './portfolio.scss'
// import {BsBoxArrowDown} from "react-icons/bs"
import Portfoliolist from '../portfoliolist/Portfoliolist'
import { featuredPortfolio, mobilePortfolio,designPortfolio, contentPortfolio} from '../../data'


const Portfolio = () => {
  const [selected,setSelected] = useState("featured")
  const [data,setData] = useState([])
  const list =[
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "mobile",
      title: "Mobile",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ]
  useEffect(() => {
    switch(selected) {
      case "featured":
      setData(featuredPortfolio);
      break;
      case "mobile":
        setData(mobilePortfolio);
        break;
        case "design":
          setData(designPortfolio);
          break;
          case "content":
            setData(contentPortfolio);
            break;
            default:
              setData(featuredPortfolio);
    }
  },[selected])
  return (
    <div  className='portfolio' id='portfolio'>
<h1>My Portfolio</h1>
<ul> 
{/*  li classname="active" */}


{list.map((item) => (
  <Portfoliolist title={item.title} active={selected === item.id} setSele cted={setSelected}
    id={item.id}
  />
))}
</ul>
<div className="container">
{data.map((d) => (
  <div className="item">
  <img src={d.img} alt="" />
  <h3>{d.title}</h3>
  </div>
))}
  
  {/* <div className="item">
  <img src="https://images.pexels.com/photos/13777322/pexels-photo-13777322.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
  <h3> Banking Application</h3>
  </div>
  <div className="item">
  <img src="https://images.pexels.com/photos/13777322/pexels-photo-13777322.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
  <h3> Banking Application</h3>
  </div>
  <div className="item">
  <img src="https://images.pexels.com/photos/13777322/pexels-photo-13777322.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
  <h3> Banking Application</h3>
  </div>
  <div className="item">
  <img src="https://images.pexels.com/photos/13777322/pexels-photo-13777322.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
  <h3> Banking Application</h3>
    
  </div>
  <div className="item">
  <img src="https://images.pexels.com/photos/13777322/pexels-photo-13777322.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
    <h3> Banking Application</h3>
  </div> */}
 
</div>
 
 <a href="#works">
      <img src="" className='arrow down' alt=""  width={"30%"}/>
      </a>
 
    </div>
    
  )
}

export default Portfolio