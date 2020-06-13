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
            <div id="box-report">
            <h3>Report a case of abuse of rights.</h3>
            <form>
                <div>
                    <label>Your name:
                        <input type="text" name="name" placeholder="Your name" required />
                    </label>
                    <label>Input your phone number or email address:
                        <input type="number" min="02000000" name="user_name" placeholder="Phone number or email address" required />
                    </label>
        
                    <label>Give a short description:
                        <input type="textarea" name="message" placeholder="Message" required />
                    </label>
                    <label>Have you sought assistance from the authorities?:
                      <select name="assistance" required>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        <option value="not_yet">Not yet</option>
                      </select>
                    </label>
                    <label>Would you like us to connect you with one of the following?:
                      <select name="assistance">
                        <option value="legal">Lawyer or Legal Representative</option>
                        <option value="legislative">Member of Parliament or County Assembly</option>
                        <option value="ngao">National Government Administrative Officer</option>
                        <option value="financial">Bank/ Microfinance Institution/ Sacco</option>
                        <option value="none">None of the above</option>
                      </select>
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