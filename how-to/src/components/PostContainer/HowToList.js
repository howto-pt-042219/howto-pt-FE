import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import HowToLink from "./HowToLink";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled.button`
  width: 400px;
  height: 50px;
  margin-top: 10px;
  // position: sticky;
  // top: 0;
  // bottom: 100;
  border: none;
  background-color: #b41010;
  color: white;
  font-size: 15px;
  border-radius: 5px;
  :hover {
    background-color: white;
    color: #b41010;
    border: 1px solid #b41010;
    cursor: pointer;
  }
`;

class HowToList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {
  //   axios
  //     .get(`https://howto-pt-042219.herokuapp.com/api/howto/`)
  //     .then(res => {
  //       this.setState({ howToData: res.data });
  //     })
  //     .catch(err => console.log(err));
  // }

 

  render() {
    return (
      <StyledContainer>
        <Link to="/how-to-form/">
          <StyledButton>Add A How-To!</StyledButton>
        </Link>
        {this.props.filteredData.map(post => (
          <HowToLink post={post} key={post.id} />
        ))}
      </StyledContainer>
    );
  }
}

export default HowToList;
