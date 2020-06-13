import React, { Component } from 'react'

class Password extends Component{

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
            <div id="box-password">
            <h3>Reset your account password.</h3>
                <form>
                    <div>
                        <label>Input your phone number or email address:
                            <input type="number" min="02000000" name="user_name" placeholder="Phone number or email address" required />
                        </label>
        
                        <label>Your secret question:
                            <input type="text" name="question" placeholder="Secret question" required />
                        </label>
        
                        <label>Your secret answer:
                            <input type="password" name="answer" placeholder="Password" />
                        </label>
        
                        <input class="button" type="submit" name="submit" value="Reset" />
                    </div>
                </form>
            </div>
        );
    }
  };

  export default Password