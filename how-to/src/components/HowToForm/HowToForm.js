import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
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

  handleAddStep = e => {
    e.preventDefault();
    const container = document.getElementById("container");
    while (container.hasChildNodes()) {
      container.removeChild(container.lastChild);
    }
    const titleInput = document.createElement("input");
    titleInput.name = "title";
    titleInput.placeholder = "Step Title";
    titleInput.onChange = this.handleChanges;
    container.appendChild(titleInput);

    const stepInput = document.createElement("input");
    stepInput.name = "description";
    stepInput.placeholder = "Step Description";
    stepInput.onChange = this.handleChanges;
    container.appendChild(stepInput);
  };

  render() {
    return (
      <>
        <div>
          <h1>Your How2 </h1>
          <h1>How2 Title: {this.state.title}</h1>
          <h2>How2 Overview: {this.state.overview}</h2>
          <h3>Author: {this.state.author}</h3>
          {/* {this.state.steps.map((step, index) => {
            return (
              <div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            );
          })} */}
        </div>

        <h1>Follow Steps To Add How2</h1>
        <StyledForm onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChanges}
            name="title"
            placeholder="Title of How To"
          />

          <input
            onChange={this.handleChanges}
            name="overview"
            placeholder="Overview"
          />

          {/* <input
            onChange={this.handleChanges}
            name="stepTitle"
            placeholder="Step Title"
          />
          <input
            onChange={this.handleChanges}
            name="description"
            placeholder="Step Description"
          />
          <ContainerDiv id="container" />
          <button onClick={this.handleAddStep}>Add A Step</button> */}
          <button>Submit How2</button>
        </StyledForm>
      </>
    );
  }
}

export default HowToForm;
