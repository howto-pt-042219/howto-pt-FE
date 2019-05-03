import React from "react";
import "./App.css";
import styled from "styled-components";
import axios from "axios";
import { Route, Link } from "react-router-dom";

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
  height: 100%;
`;

const StyledPostPage = styled.div`
  display: flex;
  border: 1px solid yellow;
`;

const StyledPost = styled.div`
  width: 800px;
  border: 1px solid blue;
`;

// const PostMarginLeft = styled.div`
//   margin-left: 196px;
// `;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      howToData: [],
      filteredData: []
    };
  }

  componentDidMount() {
    axios
      .get("https://howto-pt-042219.herokuapp.com/api/howto/")
      .then(res => {
        this.setState({ howToData: res.data });
      })
      .catch(err => console.log(err));
  }

  submitHowTo = newHowTo => {
    this.setState({ howToData: newHowTo });
  };

  deleteHowTo = howTo => {
    axios
      .delete(`https://howto-pt-042219.herokuapp.com/api/howto/${howTo}`)
      .then(res => {
        this.setState({ howToData: res.data });
      })
      .catch(err => console.log(err));
  };

  filterPost = e => {
    e.preventDefault();
    const search = this.state.howToData.filter(data => {
      if (data.title.includes(e.target.value)) {
        return data;
      }
    });
    this.setState({ filteredData: search });
  };

  render() {
    // console.log(this.state);
    return (
      <StyledContainer>
        <StyledNav>
          <NavBar filterPost={this.filterPost} />
        </StyledNav>
        <StyledPostPage>
          <SideNav />
          <StyledPost>
            <Route
              path="/howto/"
              exact
              render={props => (
                <HowToList
                  filteredData={
                    this.state.filteredData.length > 0
                      ? this.state.filteredData
                      : this.state.howToData
                  }
                />
              )}
            />
            <Route
              exact
              path="/how-to-form/"
              exact
              render={props => (
                <HowToForm submitHowTo={this.submitHowTo} {...props} />
              )}
            />
            <Route
              exact
              path="/howto/:id"
              render={props => (
                <HowTo {...props} deleteHowTo={this.deleteHowTo} />
              )}
            />
          </StyledPost>
        </StyledPostPage>
        <Footer />
      </StyledContainer>
    );
  }
}

export default App;
