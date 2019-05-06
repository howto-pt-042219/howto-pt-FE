import React from "react";
import "./App.css";
import styled from "styled-components";
import axios from "axios";
import { Route, withRouter } from "react-router-dom";

import HowToList from "./components/PostContainer/HowToList";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SideNav from "./components/SideNav/SideNav";
import HowTo from "./components/PostContainer/HowTo";
import HowToForm from "./components/HowToForm/HowToForm";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import StepForm from "./components/HowToForm/StepForm";
import Reviews from "./components/PostContainer/Reviews";
import EditForm from "./components/PostContainer/EditForm";

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 1000px;
  // border: 1px solid green;
`;

const StyledNav = styled.div`
  display: flex;
  border: 1px solid black;
  height: 100%;
`;

const StyledPostPage = styled.div`
  display: flex;
  border: 1px solid black;
  border-top: none;
`;

const StyledPost = styled.div`
  width: 800px;
  // border: 1px solid blue;
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
    const headers = { authorization: localStorage.getItem("jwt") };
    axios
      .get("https://howto-pt-042219.herokuapp.com/api/howto/", { headers })
      .then(res => {
        this.setState({ howToData: res.data });
      })
      .catch(err => console.log(err));
  }

  submitData = () => {
    const headers = { authorization: localStorage.getItem('jwt')};
    axios
      .get("https://howto-pt-042219.herokuapp.com/api/howto/", { headers })
      .then(res => {
        this.setState({ howToData: res.data });
      })
      .catch(err => console.log(err));
  };

  deleteHowTo = howTo => {
    const headers = { authorization: localStorage.getItem("jwt") };
    axios
      .delete(`https://howto-pt-042219.herokuapp.com/api/howto/${howTo}`, {
        headers
      })
      .then(res => {
        this.submitData();
      })
      .catch(err => console.log(err));
  };

  logout = () => {
    localStorage.removeItem("jwt");
    this.props.history.push("/");
  };

  filterPost = query => {
    const search = this.state.howToData.filter(data =>
      data.title.toLowerCase().includes(query.toLowerCase())
    );
    this.setState({ filteredData: search });
  };

  sortBy = (filter) => {
    if(filter === 'all') {
      this.setState({ filteredData: [] });
    } else if(filter === 'author') {
      const { username } = JSON.parse(localStorage.getItem('how2User'));
      const filtered = this.state.howToData.filter(el => el.author === username);
      this.setState({ filteredData: filtered });
    } else {
      const sorted = this.state.howToData.sort((a, b) => {
        return b[filter] - a[filter];
      });
      this.setState({ filteredData: sorted });
    }
    
  };


  // filterPost = e => {
  //   e.preventDefault();
  //   const post = this.state.howToData.filter(post => {
  //     if (post.title.toLowerCase().includes(e.target.value)) {
  //       return post;
  //     }
  //   });
  //   this.setState({ filteredData: post });
  // };

  render() {
    return (
      <StyledContainer>
        <StyledNav>
          <NavBar filterPost={this.filterPost} logout={this.logout} />
          {/* {console.log("filter data results", this.state.filteredData)} */}
        </StyledNav>
        <StyledPostPage>
          <SideNav sortBy={this.sortBy} />
          <StyledPost>
            <Route path="/" exact component={Login} />
            <Route path="/signup" component={SignUp} />
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
              path="/how-to-form/"
              exact
              render={props => (
                <HowToForm submitData={this.submitData} {...props} />
              )}
            />
            <Route
              exact
              path="/howto/:id"
              render={props => (
                <HowTo {...props} deleteHowTo={this.deleteHowTo} />
              )}
            />
            <Route
              exact
              path="/step-form/:id"
              render={props => (
                <StepForm {...props} submitData={this.submitData} />
              )}
            />
            <Route
              exact
              path="/edit-form/:id"
              render={props => <EditForm {...props} />}
            />
          </StyledPost>
        </StyledPostPage>
        <Footer />
      </StyledContainer>
    );
  }
}

export default withRouter(App);
