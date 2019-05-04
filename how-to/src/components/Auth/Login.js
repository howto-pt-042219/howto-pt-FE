import React, { Component } from 'react';
import axios from 'axios';

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
        <form onSubmit={this.handleSubmit}>
        <input 
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
            placeholder='Username'
            type='text'
          >
          </input>
          <input 
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
            placeholder='password'
            type='text'
          >
          </input>
          <button>Login</button>
        </form>
      </div>
    )
  }
}

export default Login
