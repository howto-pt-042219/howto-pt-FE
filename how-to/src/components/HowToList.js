import React from "react";
import { Route } from "react-router-dom";
import HowTo from "./HowTo";

class HowToList extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: "",
      imgUrl: []
    };
  }

  render() {
    return <HowTo title={this.state.title} />;
  }
}

export default HowToList;
