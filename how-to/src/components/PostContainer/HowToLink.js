import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

class HowToLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: "",
      liked: false,
      reviews: []
    };
  }

  render() {
    console.log(this.props.history);
    return (
      <Link to={"/howto/id/:id"}>
        <ContainerDiv>
          <h1>{this.props.post.title}</h1>
          <p>{this.props.post.overview}</p>

          {/* <p>
          {this.props.post.steps.map(step => {
            <>
              <h3>step.title</h3>
              <p>step.description</p>
            </>;
          })}
        </p> */}
        </ContainerDiv>
      </Link>
    );
  }
}

export default HowToLink;
