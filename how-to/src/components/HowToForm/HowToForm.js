import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  overflow: auto;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledTitleInput = styled.input`
  display: flex;
  width: 500px;
  padding 5px;
  height: auto;
`;

const StyledOverViewInput = styled.textarea`
display: flex;
width: 500px;
padding 5px;
`;

const StyledH2 = styled.h2`
  display: flex;
  flex-wrap: wrap;
`;

const StyledInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const OverviewDiv = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  overflow-wrap: break-word;
  max-width: 500px;
`;

class HowToForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      overview: "",
      user_id: 1
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://howto-pt-042219.herokuapp.com/api/howto", this.state)
      .then(res => {
        this.props.submitHowTo(res.data);
      })
      .catch(err => console.log(err));
    this.setState({
      title: "",
      overview: ""
    });
    this.props.history.push("/step-form");
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <StyledContainer>
        <StyledInputDiv>
          <h1>Your How2 </h1>
          <h1>How2 Title: {this.state.title}</h1>
          <OverviewDiv>
            <StyledH2>How2 Overview: {this.state.overview}</StyledH2>
          </OverviewDiv>
          <h3>Author: {this.state.author}</h3>
        </StyledInputDiv>

        <h1>Follow Steps To Add How2</h1>
        <StyledForm onSubmit={this.handleSubmit}>
          <StyledTitleInput
            onChange={this.handleChanges}
            name="title"
            placeholder="Title of How To"
          />
          <StyledOverViewInput
            onChange={this.handleChanges}
            name="overview"
            placeholder="Overview"
            rows="10"
            cols="30"
          />

          <button>Submit How2</button>
        </StyledForm>
      </StyledContainer>
    );
  }
}

export default HowToForm;
