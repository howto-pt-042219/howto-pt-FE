import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`;

const ContainerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledImg = styled.img`
  margin-left: 35px;
`;

function NavBar(props) {
  return (
    <ContainerDiv>
      <StyledImg
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzMiIGhlaWdo%0D%0AdD0iNjgiIHZpZXdCb3g9IjAgMCAxNzMgNjgiPjx0ZXh0IGZpbGw9IiM2OTY3NjciIGZvbnQtc2l6%0D%0AZT0iNDkiIGZvbnQtZmFtaWx5PSJBbGZhU2xhYk9uZS1SZWd1bGFyLCBBbGZhIFNsYWIgT25lIj48%0D%0AdHNwYW4geD0iMS41MzQiIHk9IjUxIj5IT1c8L3RzcGFuPjx0c3BhbiB5PSI1MSIgZmlsbD0iI2I0%0D%0AMTAxMCI+MjwvdHNwYW4+PC90ZXh0Pjwvc3ZnPg=="
        alt="Logo Image"
      />
      <StyledDiv>
        <h3>Username</h3>
        <input placeholder="search" />
      </StyledDiv>
    </ContainerDiv>
  );
}

export default NavBar;
