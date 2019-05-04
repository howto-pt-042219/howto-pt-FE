import React, { Component } from 'react';
import axios from 'axios';

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
          <label for='creator'>Creator</label>
          <input
            name='creator'
            checked={this.state.creator}
            onChange={this.handleCheck}
            type='checkbox'
          >
          </input>
          <button>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default SignUp
