import React from "react";
import "./App.css";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";

import Authenticate from './components/Authentication/Authenticate';
import HowToList from "./components/PostContainer/HowToList";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SideNav from "./components/SideNav/SideNav";
import HowTo from "./components/PostContainer/HowTo";
import HowToForm from "./components/HowToForm/HowToForm";

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 1000px;
  border: 1px solid green;
`;

const StyledNav = styled.div`
  display: flex;
  border: 1px solid purple;
`;

const StyledPostPage = styled.div`
  display: flex;
  border: 1px solid yellow;
`;

const StyledPost = styled.div`
  width: 800px;
  border: 1px solid blue;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      howToData: []
    };
  }

  handleLogOut = e => {
    localStorage.removeItem("user");
    console.log("logging out");
    window.location.reload();
  };

  render() {
    return (
      <StyledContainer>
        <StyledNav>
          <NavBar />
          <button onClick={this.handleLogOut}>Log Out</button>
        </StyledNav>
        <StyledPostPage>
          <SideNav />
          <StyledPost>
            <Route path="/howto/" exact component={HowToList} />
            <Route exact path="/how-to-form/" exact component={HowToForm} />
            <Route
              exact
              path="/howto/:id"
              render={props => <HowTo {...props} />}
            />
          </StyledPost>
        </StyledPostPage>
        <Footer />
      </StyledContainer>
    );
  }
}

export default Authenticate(App);
