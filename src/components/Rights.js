import React, { Component } from 'react'

class Rights extends Component{
    render() {
      return (
        <div id="box-rights">
    <h2>The 5 Basic Human Rights</h2>
    <div>
        <ul>
            <li>Article 1 -  Right to Equality</li>
            <li>Article 2 -  Freedom from Discrimination</li>
            <li>Article 3 -  Right to Life, Liberty, Personal Security</li>
            <li>Article 4 -  Freedom from Slavery</li>
            <li>Article 5 -  Freedom from Torture and Degrading Treatment</li>
        </ul>
    </div>
    <div>
        <p>
            <a target="_blank" href="https://www.un.org/en/universal-declaration-human-rights/" rel="noopener noreferer">
            The Universal Declaration of Human Rights</a>
        </p>
    </div>
    <p>
        Do you want to <a href="#">report a case</a> of abuse of rights?
    </p>
</div>
        
      );
    }
  };

  export default Rights