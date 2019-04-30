import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import HowTo from "./HowTo";

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
        {this.state.howToData.map((post, index) => (
          <Link to={`/howto/${post.id}`}>
            <HowTo post={post} />
          </Link>
          // <Route
          //   exact
          //   path={`/howto/${post.id}`}
          //   render={props => <HowTo post={post} {...props} />}
          // />
        ))}
      </div>
    );
  }
}

export default HowToList;
