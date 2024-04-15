import React from 'react'
import "./Hero.css" ;
export default function Hero(props) {
  return (
    <>
    <div className={props.cName}>
      <img alt="HerpImg" src={props.HeroImg}/>
    </div>
    <div className="Herotext">
      <h1>{props.title}</h1>
      <p>{props.p}</p>
      <a href={props.url} className={props.btnclass}>{props.a}</a>
    </div>
    </>
  )
}
