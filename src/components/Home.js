import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Login from './Login'

class Home extends Component{

    render() {
      return (
        <div>
            <div id="box-home">
                <h2>Home</h2>
                <Login />
                <Link to="password"><p>Forgot your password?</p></Link>
                <div id="container">
                    <div id="card">
                        <Link to="rights"><h3>Know Your Rights</h3></Link>
                        <p>
                            Do you know that everyone has a right to equal economic opportunities?
                        </p>
                    </div>
                    <div id="card">
                        <Link to="report"><h3>Report Abuse of Rights</h3></Link>
                        <p>
                            Have you witnessed an abuse of rights you wish to report?
                        </p>
                    </div>
                    <div id="card">
                        <Link to="legal"><h3>Talk to a lawyer or legal representative</h3></Link>
                        <p>
                            Get free legal advise and access to representation.
                        </p>
                    </div>
                    <div id="card">
                        <Link to="legislative"><h3>Connect with your area M.P. or M.C.A.</h3></Link>
                        <p>
                            Do you want to connect with your local parliamentary or county government representative?
                        </p>
                    </div>
                    <div id="card">
                        <Link to="financial"><h3>Get Financial/ Economic Assistance</h3></Link>
                        <p>
                            Do you want to open a bank account or get access to funds?
                        </p>
                    </div>
                    <div id="card">
                        <Link to="ngao"><h3>Contact your area chief</h3></Link>
                        <p>
                            Talk to you local national government administrative officer, e.g., chief, assistant chief, 
                            county commissioner.
                        </p>
                    </div>
               </div>
            </div>
        </div>
        );
      }
    };
  
    export default Home