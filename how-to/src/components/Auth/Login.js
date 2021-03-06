import React, { Component } from 'react';
import styled from "styled-components";
import axios from 'axios';
import SignUp from './SignUp'
import { Link } from "react-router-dom";

const LoginBox = styled.form`
  display: flex;
  justify-content: center;
  margin: 10% 10% 2% 10%;
`;

const LoginButton = styled.button`
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

const InputBox = styled.input`
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

const SignupLink = styled(Link)`
    color: #B41010;
    font-weight: bold;
    display: flex;
    justify-content: center;
    
`;

class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();
    axios.post('https://howto-pt-042219.herokuapp.com/api/auth/login', this.state)
      .then(res => {
        localStorage.setItem('jwt', res.data.token);
        localStorage.setItem('how2User', JSON.stringify(res.data.loggedUser))
        this.props.history.push('/howto');
      }).catch(err => {
        console.log(err);
      })
      this.setState({
        username: "",
        password: ""
      })
  }

  render() {
    return (
      <div>
        <LoginBox>
        
          <form onSubmit={this.handleSubmit}>
          
          <InputBox 
              name='username'
              value={this.state.username}
              onChange={this.handleChange}
              placeholder='Username'
              type='text'
            >
            </InputBox>
          
            <InputBox  
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
              placeholder='password'
              type='text'
            >
            </InputBox>
            <LoginButton
            disabled={!this.state.username || !this.state.password}
            >Login</LoginButton>
          </form>
        </LoginBox>
        <SignupLink to="/signup" component={SignUp}>Sign Up!</SignupLink>
      </div>
    )
  }
}

export default Login
