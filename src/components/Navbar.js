
import  { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { MenuItems } from './Menuitems';

 class Navbar extends Component {
  state = {clicked: false};
  handleClick = () =>{
    this.setState({clicked: !this.state.clicked})
  }
  render() {
    return (
      <nav className="navbar-items">
        <h1 className="navbar-logo">Tour</h1>
        <div className="menu-icons" onClick={this.handleClick}>
           <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>

        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((items, index) =>{
            return(
              <li key={index} >
              <Link className={items.cName} to={items.url}>
              <i className={items.icon}></i>{items.title}
              </Link>
            </li>
            )
          })}
         <button className="Signup">Sign Up</button>
        </ul>
      </nav>
    )
  }
}
export default Navbar;