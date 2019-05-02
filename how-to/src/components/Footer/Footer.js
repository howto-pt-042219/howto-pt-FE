import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  background-color: #2384a8;
  height: 50px;
  padding-top: 17px;
`;

const StyledA = styled.a`
  margin-left: 10px;
  text-decoration: none;
  color: white;
  :hover {
    text-decoration: underline;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledA href="">About Us</StyledA>
      <StyledA href="">Contact Us</StyledA>
      <StyledA href="">Our Team</StyledA>
    </StyledFooter>
  );
}

export default Footer;
