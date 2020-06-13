import React, { Component } from 'react'

class Login extends Component{

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
            <div>
            <h3>Log in to your account.</h3>
                <form>
                    <div>
                        <label>Input your phone number or email address:
                            <input type="number" min="02000000" name="user_name" placeholder="Phone number or email address" required />
                        </label>
        
                        <label>Your password:
                            <input type="password" name="answer" placeholder="Password" />
                        </label>
        
                        <input class="button" type="submit" name="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
  };

  export default Login