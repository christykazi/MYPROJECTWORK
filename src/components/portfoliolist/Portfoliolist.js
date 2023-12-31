import React from 'react'
import "./portfoliolist.scss";


export default function PortfolioList({id, title,   active, setSelected}){
  return (
         <li className={active ? "portfoliolist active" : "portfoliolist"} onClick={() => setSelected(id)}>
     {title}
         </li>
       )
}

// const Portfoliolist = ({id, title,   active, setSelected}) => {
//   return (
//     <li className={active ? "portfoliolist active" : "portfoliolist"} onclick={() => setSelected(id)}>
// {title}
//     </li>
//   )
// }

// export default Portfoliolist  