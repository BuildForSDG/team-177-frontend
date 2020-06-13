import React, { Component } from 'react'

class Ideology extends Component{
    render() {
      return (
        <div id="box-ideology">
          <h3>What is the inspiration behind your team's project?</h3>
          <p>
              In our country Kenya, denial of quality and needed services is rampant, plagued by inefficiencies, 
              sub-par project and resource delivery or just outright ignorance of laid down procedures of handling 
              problems and carving solutions. 
            
          </p>
          <p>
              This leads to a failure of amenities due to inferior product outline 
              and implementation for both tangible assets such as roads, hospitals, dams and land and intangible 
              ones like services in public utilities which are inferior and public policy that is largely 
              dissociative.
          </p>
          <p>
              This is further exacerbated by people lacking knowledge that they are entitled to 
              stellar services and product delivery and that they have avenues of legal and legislative recourse.
          </p>
          <p>
              We view this as an abject denial of equal rights to economic (financial) and other basic resources 
              since there is a gap of people not knowing that they should be receiving superior facilitation to 
              better themselves and pull themselves out of poverty sustainably.
          </p>
          <h3>What would your project do in your community or for the world at large?</h3>
          <p>
              As its commonly stated, "with knowledge comes power", so, through our interactive website, also 
              available via mobile app and future integration through USSD quick code, we seek to provide the 
              general populace with easy access to information regarding their rights, access to 
              legal, legislative, administrative and financial assistance as they all go together, and a way 
              of reporting abuse of rights.
          </p>
          <p>
              This should curb this situation of people being taken advantage of as they will be able to 
              detect non-committal and ineffective service, both in the public and private sectors. As a 
              result, poverty should be alleviated in a way.
          </p>
          <p>
              Do you want to <a href="{% url 'report' %}">report a case</a> of abuse of rights?
          </p>
</div>
        
      );
    }
  };

  export default Ideology