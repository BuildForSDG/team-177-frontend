import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Basic extends Component{
    render() {
      return (
        <div>
          <header>
            <Link to="/"><img src={require("../images/logo_negative_125.png")} alt="logo" /></Link>
            <nav>
              <ul>
                <li><Link to="/account">Create Account</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contactus">Contact Us</Link></li>
              </ul>
            </nav>
          </header>
          <div id="main-box">
            <p>Welcome user</p>
            <div id="quicklinks">
                <h4>Quick Links</h4>
                <ul>
                    <li>
                        <a href="http://kenyalaw.org/kenya_gazette/" target="_blank" rel="noopener noreferrer">
                            Kenya Gazette
                        </a>
                    </li>
                    <li>
                        <a href="http://kenyalaw.org:8181/exist/kenyalex/index.xql" target="_blank" rel="noopener noreferrer">
                            The Laws of Kenya
                        </a>
                    </li>
                    <li>
                        <a href="https://www.knchr.org/" target="_blank" rel="noopener noreferrer">
                            Kenya National Commission on Human Rights
                        </a>
                    </li>
                    <li>
                        <a href="https://www.undp.org/content/undp/en/home/sustainable-development-goals/goal-1-no-poverty.html" target="_blank" rel="noopener noreferrer">
                            Sustainable Development Goals
                        </a>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      );
    }
  };

  export default Basic