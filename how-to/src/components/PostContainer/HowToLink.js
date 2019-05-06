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

const StyledLikes = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const StyledP = styled.p`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: auto;
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
          <StyledP>{this.props.post.overview}</StyledP>

          <StyledLikes>
            <p>{this.props.post.likes} Likes</p>
            <p>{this.props.post.tries} Tries</p>
          </StyledLikes>
        </ContainerDiv>
      </StyledLink>
    );
  }
}

export default HowToLink;
