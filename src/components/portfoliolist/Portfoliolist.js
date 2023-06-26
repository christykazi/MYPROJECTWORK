import React from 'react'
import "./portfoliolist.scss";

const Portfoliolist = ({title, active, setSelected}) => {
  return (
    <li className={active ? "portfoliolist active" : "portfoliolist"} onclick={()=> setSelected()}>
{title}
    </li>
  )
}

export default Portfoliolist