import React, { Component } from 'react'
import './Destination.css'
export default class Destinationdata extends Component {
  render() {
    return (
      <>
       <div className={this.props.cName}>
        <div className="desc-text">
            <h2>{this.props.heading}</h2>
            <p>
            {this.props.text}
            </p>
        </div>
        <div className="image">
            <img alt="img" src={this.props.img1} />
            <img alt="img" src={this.props.img2} />
        </div>
    </div>
    
      </>
    )
  }
}

