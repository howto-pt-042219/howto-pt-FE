import React from "react";
import { Route } from "react-router-dom";

class HowTo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: "",
      liked: false,
      reviews: []
    };
  }
  render() {
    return (
      <>
        <h1>Title</h1>
        <p>Body</p>
      </>
    );
  }
}

export default HowTo;
