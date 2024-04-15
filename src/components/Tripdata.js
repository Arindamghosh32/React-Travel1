import React from 'react'
import './Trips.css'
export default function Tripdata(props) {
  return (
    <div className="t-card">
        <div className="photo">
            <img alt='img' src={props.image1}/>
            </div>
            <h1>{props.heading}</h1>
            <p>{props.para}</p> 
    </div>
  )
}

