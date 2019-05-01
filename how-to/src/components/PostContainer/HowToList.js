import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import HowToLink from "./HowToLink";

class HowToList extends React.Component {
  constructor() {
    super();
    this.state = {
      howToData: []
    };
  }

  componentDidMount() {
    axios
      .get(`https://howto-pt-042219.herokuapp.com/api/howto/`)
      .then(res => {
        this.setState({ howToData: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        {this.state.howToData.map((post, index) => (
          <HowToLink post={post} />
        ))}
      </div>
    );
  }
}

export default HowToList;