import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Legal extends Component{
    render() {
      return (
        <div id="box-legal">
          <h3>Get legal assistance.</h3>
          <p>
              Meet our<a target="_blank" href="http://kituochasheria.or.ke/our-programs/legal-aid-education-programme/" rel="noopener noreferrer"> team of experienced legal professionals</a>.
          </p>
          <p>
              Do you want to <Link to="report">report a case</Link> of abuse of rights?
          </p>
        </div>
        
      );
    }
  };

  export default Legal