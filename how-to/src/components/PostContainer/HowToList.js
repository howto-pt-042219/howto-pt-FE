import React from "react";
import { Link } from "react-router-dom";
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
    console.log(this.state);
    return (
      <div>
        <Link to="/how-to-form/">
          <button>Add A How-To!</button>
        </Link>
        {this.state.howToData.map((post, index) => (
          <HowToLink post={post} />
        ))}
      </div>
    );
  }
}

export default HowToList;
