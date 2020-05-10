import React, {Component} from 'react';
import './Navbar.css';


class Navbar extends Component{
    render(){
        return(
            <div>

<nav className="navbar navbar-light light-blue lighten-4 sticky-top" >


  <a className="navbar-brand" href="#">Home</a>
  <a className="navbar-brand" href="#">About</a>
  <a className="navbar-brand" href="#">Services</a>
  <a className="navbar-brand" href="#">Contact</a>
  <a className="navbar-brand" href="#">Create Account</a>

  <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
    aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span className="dark-blue-text"><i
        className="fas fa-bars fa-1x"></i></span></button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent1">


    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Kenya constitution <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Kenya Gazette</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">KLR</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">KNCHR</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">KLRC</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">un.org</a>
      </li>

    </ul>


  </div>

</nav>


            </div>
        )
    }
} 

export default Navbar;