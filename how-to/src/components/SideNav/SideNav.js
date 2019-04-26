import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 800px;
  padding-top: 11%;
  border: 1px solid red;
`;

const StyledButton = styled.button`
  display: flex;
  margin-left: 20%;
  margin-right: 20%
  margin-bottom: 50%;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 5px;
  padding: 26px;
  ::focus {outline: none};
`;

function SideNav() {
  return (
    <StyledContainer>
      <StyledButton>Top Rated</StyledButton>
      <StyledButton>Newest</StyledButton>
      <StyledButton>Show All</StyledButton>
      <StyledButton>Your Posts</StyledButton>
    </StyledContainer>
  );
}

export default SideNav;
