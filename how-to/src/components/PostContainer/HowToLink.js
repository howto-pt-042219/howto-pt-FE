import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  margin-top: 10px;
  color: black;
  width: 400px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
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
    // console.log(this.props.history);
    return (
      <StyledLink to={`/howto/${this.props.post.id}`}>
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
      </StyledLink>
    );
  }
}

export default HowToLink;
