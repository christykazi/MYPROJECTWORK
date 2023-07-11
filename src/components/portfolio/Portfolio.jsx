import React from 'react'
import {useEffect, useState} from 'react'
import './portfolio.scss'
// import {BsBoxArrowDown} from "react-icons/bs"
import PortfolioList from '../portfoliolist/Portfoliolist'
import { featuredPortfolio, webPortfolio,mobilePortfolio, designPortfolio, contentPortfolio} from '../../data'


export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
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
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}


// const Portfolio = () => {
//   const [selected,setSelected] = useState("featured")
//   const [data,setData] = useState([])

//   const list =[
//     {
//       id: "featured",
//       title: "Featured",
//     },
//     {
//       id: "mobile",
//       title: "Mobile App",
//     },
//     {
//       id: "design",
//       title: "Design App",
//     },
//     {
//       id: "content",
//       title: "Content App",
//     },
//   ]
//   useEffect(() => {
//     switch(selected) {
//       case "featured":
//       setData(featuredPortfolio);
//       break;
//       case "mobile":
//         setData(mobilePortfolio);
//         break;
//         case "design":
//           setData(designPortfolio);
//           break;
//           case "content":
//             setData(contentPortfolio);
//             break;
//             default:
//               setData(featuredPortfolio);
//     }
//   },[selected])
//   return (
//     <div  className='portfolio' id='portfolio'>
// <h1>My Portfolio</h1>
// <ul> 
// {/*  li classname="active" */}


// {list.map((item) => (
//   <Portfoliolist title={item.title} active={selected === item.id} setSelected={setSelected}
//     id={item.id}
//   />
// ))}
// </ul>
// <div className="container">
// {data.map((d) => (
//   <div className="item">
//   <img src={d.img} alt="" />
//   <h3>{d.title}</h3>
//   </div>
// ))}
  
 
 
// </div>
 
//  <a href="#works">
//       <img src="" className='arrow down' alt=""  width={"30%"}/>
//       </a>
 
//     </div>
    
//   )
// }

// export default Portfolio