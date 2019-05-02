import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 223px;
  height: 800px;
  padding-top: 11%;
  border: 1px solid red;
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
  :hover {background-color: white; color:#115D8D; border: 1px solid #115D8D }
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
