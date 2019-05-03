import React, { Component } from "react";

class LoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
   
    };
  }

  handleLogOut = e => {
    localStorage.removeItem("user");
    console.log("logging out");
    window.location.reload();
  };

  creator = () => {};

  render() {
    return (
      <div>
        {/* <div>
          {this.state.isCreator && (
            <p>Congratulations! You registered to be a content creator!!</p>
          )}
        </div> */}
        <h1>You are logged in to the How-to App!!</h1>
        <button onClick={this.handleLogOut}>Log Out</button>
      </div>
    );
  }
}

export default LoggedIn;