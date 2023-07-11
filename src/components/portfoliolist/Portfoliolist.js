import React from 'react'
import "./portfoliolist.scss";

const Portfoliolist = ({id,title,   active, setSelected}) => {
  return (
    <li className={active ? "portfoliolist active" : "portfoliolist"} onclick={() => setSelected(id)}>
{title}
    </li>
  )
}

export default Portfoliolist