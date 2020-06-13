import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Financial extends Component{
    render() {
      return (
        <div id="box-financial">
          <h3>Access financial/ economic assistance.</h3>
          <p>
              List of banks, saccos and m.f.i.'s, followed by a short descriptiion, that
              offer affordable and reasonable solutions aligned with alleviation of poverty.
          </p>
          <p>
              Do you want to <Link to="report">report a case</Link> of abuse of rights?
          </p>
        </div>
        
      );
    }
  };

  export default Financial