import React, { Component } from 'react';
import { StyledForm } from '../styles/StyledForm';

const initialUser = {
    username: '',
    password: ''
};

class SignUp extends Component {
    state = { user: initalUser, message: '' };

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({ user: { ...this.state.user, [name]: value } });
};

render() {
    const { username, password } = this.state.user;
    return (
        <div>
            <StyledForm>
                <div className='form-group'>
                <h3>Sign Up</h3>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              name="username"
              onChange={this.handleInputChange} />
          </div>
            </StyledForm><
        </div>

    )
};





export default SignUp;