import React, { Component } from 'react';
import styled from "styled-components";
import axios from 'axios';

const LoginBox = styled.form`
  display: flex;
  justify-content: center;
  margin: 10%;
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
     border: 1px solid #ccc;
    -webkit-box-shadow: inset 0 0 0px 9999px white;
    }
    
}
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
            <LoginButton>Login</LoginButton>
          </form>
        </LoginBox>
      </div>
    )
  }
}

export default Login
