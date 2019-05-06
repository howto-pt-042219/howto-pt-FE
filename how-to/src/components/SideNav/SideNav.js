import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  bottom: 100;
  width: 223px;
  height: 938px;
  padding-top: 11%;
  border-right: 1px solid black;
  background-color: rgba(236, 242, 93, 0.09);
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  margin-left: 20%;
  margin-right: 20%
  margin-bottom: 50%;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  background-color: #115D8D;
  color: white;
  font-size: 15px;
  padding: 25px;
  :focus {outline: none};
  :hover {background-color: white; color:#115D8D; border: 1px solid #115D8D; cursor: pointer }
`;

function SideNav(props) {
  return (
    <StyledContainer>
      <StyledButton onClick={() => props.sortBy('likes')}>Top Rated</StyledButton>
      <StyledButton onClick={() => props.sortBy('id')}>Newest</StyledButton>
      <StyledButton onClick={() => props.sortBy('all')}>Show All</StyledButton>
      <StyledButton onClick={() => props.sortBy('author')}>Your Posts</StyledButton>
    </StyledContainer>
  );
}

export default SideNav;
