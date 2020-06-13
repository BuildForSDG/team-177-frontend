import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Legislative extends Component{
    render() {
      return (
        <div id="box-legislative">
          <h3>Connect with your area Member of Parliament or County Assembly.</h3>
          <p>
              Parliament and/ or County Assembly contacts...
          </p>
          <p>
              Do you want to <Link to="report">report a case</Link> of abuse of rights?
          </p>
        </div>
        
      );
    }
  };

  export default Legislative