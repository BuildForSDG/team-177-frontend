import React, { Component } from 'react'


class Account extends Component{

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
        alert('Account details submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div id="box-account">      
                <h3>Create an account.</h3>
                <form>
                    <div>
                        <label>First name:
                            <input type="text" name="first_name" placeholder="First name" required />
                        </label>
                        <label>Second name:
                            <input type="text" name="second_name" placeholder="Second name" />
                        </label>
                    
                        <label>Your gender:
                            <select name="gender" required>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="not_say">I'd rather not say</option>
                            </select>
                        </label>
                    
                        <label>How old are you?:
                            <input type="number" min="18" name="age" placeholder="Age" required />
                        </label>
                    
                        <label>Phone number:
                            <input type="number" min="02000000" name="phone_number" placeholder="e.g. 02000000, 0700000000" required />
                        </label>
                    
                        <label>Email address:
                            <input type="email" name="email" placeholder="Your email address" />
                        </label>
                    
                        <label>Password:
                            <input type="password" name="password" placeholder="Password" required />
                        </label>
                    
                        <label>Create secret question:
                            <input type="text" name="question" placeholder="e.g., What was my first pet?" required />
                        </label>
                    
                        <label>Your secret answer:
                            <input type="password" name="answer" placeholder="Password" required />
                        </label>
                    
                        <label>Location:
                            <input type="text" name="location" placeholder="Where do you live? ...name your county or constituency" />
                        </label>
                    </div>
                    <input class="button" type="submit" name="submit" value="Submit" />
                </form>
            </div>
        );
    }
  };

  export default Account