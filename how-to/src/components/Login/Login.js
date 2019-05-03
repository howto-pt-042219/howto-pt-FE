import React, { Component } from "react";

import axios from "axios";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      creator: false,
    };
  }

//   componentDidMount() {
//     // The token that was set to LocalStorage is now set to an
//     // object called "headers" on a key called "authorization"
//     const headers = { authorization: localStorage.getItem('jwt')};
//     // When the axios request is made, the headers object needs
//     // to be passed in as an object. The backend with handle
//     // the token.
//     axios.get("https://howto-pt-042219.herokuapp.com/api/auth/login", { headers })
//       .then(res => {
//         this.setState({ users: res.data });
//       }).catch(err => {
//         console.log(err);
//       })
//   }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit = e => {
    const user = this.state.username;
    localStorage.setItem("user", user);
    this.setState = ({ creator: this.state.creator});
    window.location.reload();

  };

//   handleLoginSubmit = event => {
//     event.preventDefault();
//     axios
//       .post("https://howto-pt-042219.herokuapp.com/api/auth/register", this.state)
//       .then(res => {
//         //  The post responds with a data object that is carrying
//         //  the token.  All that needs to be done here is setting
//         //  that token to LocalStorage.
//         localStorage.setItem("jwt", res.data.token);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//     this.setState({
//       username: "",
//       password: ""
//     });
//   };

handleCreatorLoginType = e => {
    this.setState = ({ creator: true});
    console.log("Creator", this.state.creator)
}
handleViewerLoginType = e => {
    this.setState = ({ creator: false});
    console.log("Viewer", this.state.creator)
}

  render() {
    return (
      <div className="loginContainer">
        <form className="viewerForm">
        <div className="inputFields">
        <input
            type="text"
            placeholder="User Name"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          
        </div>
          <button
            className="loginButton"
            onClick={this.handleLoginSubmit}
            disabled={!this.state.username || !this.state.password}
          >
           Login
          </button>
          <div className="loginTypeCreator">
            <input
                type="radio"
                name="creator"
                onClick={this.handleCreatorLoginType}
            /> 
            Create account as creator
          </div>
          <div className="loginTypeViewer">
             <input
                type="radio"
                name="creator"
                onClick={this.handleViewerLoginType}
            /> 
            Create account as viewer
          </div>
          
    
        </form>

      </div>
    );
  }
}

export default Login;