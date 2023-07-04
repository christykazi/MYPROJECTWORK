import React from 'react'
import './testimonials.scss'


const Testimonials = () => {
  const data=[
    {
      id:1,
      name: "Agbai Christy",
      title: "Senior Developer",
      img:"https://images.pexels.com/photos/1009904/pexels-photo-1009904.jpeg?auto=compress&cs=tinysrgb&w=600",
      icon:"https://github.com/safak/youtube/blob/react-portfolio/public/assets/youtube.png?raw=true",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, officia  Suscipitm.",
    },
    {
      id:2,
      name: "Agbai Christiana",
      title: "Ceo of criXanna",
      img:"https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?auto=compress&cs=tinysrgb&w=600",
      icon:"https://github.com/safak/youtube/blob/react-portfolio/public/assets/twitter.png?raw=true",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, officia  Suscipitm.",
      featured: true,
    },
    {
      id:3,
      name: "Kazi Ifunanya",
      title: "co-Founder of criXanna",
      img:"https://images.pexels.com/photos/1009904/pexels-photo-1009904.jpeg?auto=compress&cs=tinysrgb&w=600",
      icon:"https://github.com/safak/youtube/blob/react-portfolio/public/assets/linkedin.png?raw=true",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, officia  Suscipitm.",
    }
  ]
  return (
    <div className='testimonials' id='testimonials'>
    <h1> Testimonials</h1>
    <div className="container">
    {data.map((d)=>(
      <div className={d.featured ? "card featured" : "card"}>
        <div className="top">
          <img src="https://github.com/safak/youtube/blob/react-portfolio/public/assets/right-arrow.png?raw=true" className='left'  alt=""  />
          <img className='user' src={d.img} alt="" />
          <img  src= {d.icon}alt=""  className='right'/>
        </div>
        <div className="center">{d.desc}</div>
        <div className="bottom">
          <h3>{d.name}</h3>
          <h4>{d.title}</h4>
        </div>
      </div>
      ))}
    </div>
    </div>
  )
}

export default Testimonials