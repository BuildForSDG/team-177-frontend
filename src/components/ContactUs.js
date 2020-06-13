import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ContactUs extends Component{

    constructor(props) {
        super(props);
        this.state = {value: 'Phone number or email address'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        }
    handleSubmit(event) {
        alert('Password reset succesfully: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div id="box-contactus">
            <h3>Get in touch with us.</h3>
            <p>
              Leave a comment or query on your experience with this
              platform and may be a suggestion on how to improve it.
            </p>
            <form>
                <div>
                    <label>Your name:
                        <input type="text" name="name" placeholder="Your name" required />
                    </label>
                    <label>Input your phone number or email address:
                        <input type="number" min="02000000" name="user_name" placeholder="Phone number or email address" required />
                    </label>
        
                    <label>Message:
                        <input type="textarea" name="message" placeholder="Message" />
                    </label>
        
                    <input class="button" type="submit" name="submit" value="Submit" />
                  </div>
              </form>
              <p>
                 We'll get back to you as soon as possible.
              </p>
              <p>
                 Do you want to <Link to="report">report a case</Link> of abuse of rights?
              </p>
            </div>
        );
    }
  };

  export default ContactUs