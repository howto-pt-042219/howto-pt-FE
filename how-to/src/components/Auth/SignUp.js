import React, { Component } from 'react';
import Login from './Login';
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios';

const SignupBox = styled.form`
  display: flex;
  justify-content: center;
  margin: 10% 10% 2% 10%;
`;

const SignupButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #115D8D;
  color: white;
  display: block;
  font-size: 15px;
  padding: 10px;
  margin: 10px 0 10px 0;
  text-decoration: none;
  width: 100%;
  
  :disabled {background: grey};
  :disabled:hover {background: grey; border: white; color: white;};
  :focus {outline: none};
  :hover {background-color: white; color:#115D8D; border: 1px solid #115D8D; cursor: pointer }
`;

const SignupInput = styled.input`
    border-radius: 5px;
    margin: 1px;
    padding: 4px;
    -webkit-appearance: none; 
    -moz-appearance: none; 
    border: 2px solid #eee;

    :focus {outline-color: #b41010};
    :-webkit-autofill {
    -webkit-box-shadow: inset 0 0 0px 9999px white;
    }
}
`;

const CreatorInput = styled.div`
  display: flex;
  justify-content: center;
`;

const LoginLink = styled(Link)`
    color: #B41010;
    font-weight: bold;
    display: flex;
    justify-content: center;
    
`;

class SignUp extends Component {
  state = {
    username: "",
    password: "",
    creator: false
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleCheck = event => {
    this.setState({ creator: event.target.checked })
  }

  handleSubmit = event => {
    event.preventDefault();
    axios.post('https://howto-pt-042219.herokuapp.com/api/auth/register', this.state)
      .then(res => {
        localStorage.setItem('jwt', res.data.token);
        this.props.history.push('/');
      }).catch(err => {
        console.log(err);
      })
    this.setState({
      username: "",
      password: "",
      creator: false
    })
  }

  render() {
    return (
      <div>
      <SignupBox>
          <form onSubmit={this.handleSubmit}>
          <div>
            <SignupInput 
                name='username'
                value={this.state.username}
                onChange={this.handleChange}
                placeholder='Username'
                type='text'
              >
              </SignupInput>
              <SignupInput 
                name='password'
                value={this.state.password}
                onChange={this.handleChange}
                placeholder='password'
                type='text'
              >
              </SignupInput>
          </div>

          

            <SignupButton
            disabled={!this.state.username || !this.state.password}
            >
            Sign Up</SignupButton>
            <CreatorInput>
            <label for='creator'>Creator</label>
              <input
                name='creator'
                checked={this.state.creator}
                onChange={this.handleCheck}
                type='checkbox'
              >
              </input>
          </CreatorInput>
          </form>
        </SignupBox>
        <LoginLink to="/" component={Login}>Log In!</LoginLink>
      </div>
    )
  }
}

export default SignUp
