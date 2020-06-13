import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class About extends Component{
    render() {
      return (
        <div id="box-about">
            <h3>About Us</h3>
            <div>
                <p>
                    We seek to address the inequality experienced by a lack of 
                    knowledge and resources to seek legal and economic redress.
                </p>
                <p>
                    We connect social and industry stakeholders in the 
                    <Link to="legal"> legal</Link>, <Link to="legislative">legislative</Link>, 
                    <Link to="ngao"> national administrative</Link> and <Link to="financial">financial </Link> 
                    fields to the common individual hoping to bridge this gap by leveraging this platform.
                </p>
                <p>
                    With this in mind, you get access to 
                    reliable <a target="_blank" href="#" rel="noopener noreferrer">legal advice</a> from 
                    our <a target="_blank" href="http://kituochasheria.or.ke/our-programs/legal-aid-education-programme/" rel="noopener noreferrer">team of experienced legal professionals</a>, connect 
                    with your <a target="_blank" href="#" rel="noopener noreferrer">local legislators</a>, area
                     <a target="_blank" href="#" rel="noopener noreferrer">national government administrative officers</a> and <a target="_blank" href="#" rel="noopener noreferrer">financial partners</a> to 
                     guide and walk with you.
                </p>
                <Link to="ideology"><p>Learn more...</p></Link>
                <p>
                    Do you want to <Link to="report">report a case</Link> of abuse of rights?
                </p>
            </div>
        </div>
        
      );
    }
  };

  export default About