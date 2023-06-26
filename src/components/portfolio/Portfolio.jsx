import React from 'react'
import {useEffect, useState} from 'react'
import './portfolio.scss'
import Portfoliolist from '../portfoliolist/Portfoliolist'

const Portfolio = () => {
  const [selected,setSelected] = useState("featured")
  const list =[
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "develop",
      title: "Developing",
    },
    {
      id: "designing",
      title: "Designing",
    },
    {
      id: "branding",
      title: "Branding",
    },
  ]
  return (
    <div  className='portfolio' id='portfolio'>
<h1>Portfolio</h1>
<ul> 
{list.map((item)=>(
  <Portfoliolist title={item.title} active={selected === item.id} setSelected={setSelected}
    id={item.id}
  />
))}
</ul>
<div className="container">
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
  </div>
  <div className="item">
  <img src="https://images.pexels.com/photos/13777322/pexels-photo-13777322.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
  <h3> Banking Application</h3>
    
  </div>
  <div className="item">
  <img src="https://images.pexels.com/photos/13777322/pexels-photo-13777322.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
    <h3> Banking Application</h3>
  </div>
</div>

    </div>
  )
}

export default Portfolio