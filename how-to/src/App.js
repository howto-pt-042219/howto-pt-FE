import React from "react";
import "./App.css";
import styled from "styled-components";

import HowToList from "./components/PostContainer/HowToList";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SideNav from "./components/SideNav/SideNav";

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 1000px;
  border: 1px solid green;
`;

const StyledNav = styled.div`
  display: flex;
  border: 1px solid purple;
  margin-left: 20%;
`;

const StyledPostPage = styled.div`
  display: flex;
  border: 1px solid yellow;
`;

function App() {
  return (
    <StyledContainer>
      <StyledNav>
        <NavBar />
      </StyledNav>
      <StyledPostPage>
        <SideNav />
        <HowToList />
      </StyledPostPage>
      <Footer />
    </StyledContainer>
  );
}

export default App;
