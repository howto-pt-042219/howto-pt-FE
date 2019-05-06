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
  background-color: lightblue;
  height: 100%;
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
  margin-bottom: 10px;
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
  flex-direction: column;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  overflow-wrap: break-word;
  max-width: 500px;
  margin-top: 0;
`;

const SubmitButton = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
  height: 50px;
  background-color: #2384a8;
  color: white;
  padding: 5px;
  border-radius: 10px;
  margin-top: 13px;
  padding-top: 5px;
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
    const headers = { authorization: localStorage.getItem('jwt') }
    const id = this.props.match.params.id;
    axios
      .post("https://howto-pt-042219.herokuapp.com/api/howto", this.state, { headers })
      .then(res => {
        this.props.submitHowTo(res.data);
      })
      .catch(err => console.log(err));
    this.setState({
      title: "",
      overview: ""
    });
    this.props.history.push(`/step-form/${id}`);
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    // console.log(this.props);
    return (
      <StyledContainer>
        <StyledInputDiv>
          <h1>Your How2 </h1>
          <h2>How2 Title: {this.state.title}</h2>
          <OverviewDiv>
            <StyledH2>How2 Overview: </StyledH2>
            <p>{this.state.overview}</p>
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

          <SubmitButton>Submit How2</SubmitButton>
        </StyledForm>
      </StyledContainer>
    );
  }
}

export default HowToForm;
