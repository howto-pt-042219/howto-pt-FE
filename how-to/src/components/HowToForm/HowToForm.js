import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

class HowToForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      overview: "",
      author: "",
      steps: [
        {
          title: "",
          description: ""
        }
      ],
      reviews: [
        {
          text: "",
          username: ""
        }
      ]
    };
  }

  handleSubmit(step) {
    // push step to DB
  }

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
          <h3>Your How2 </h3>
          <h1>{this.state.title}</h1>
          <h2>{this.state.overview}</h2>
          <h3>{this.state.author}</h3>
          {this.state.steps.map(step => {
            <>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </>;
          })}
        </div>

        <h1>Follow Steps To Add How2</h1>
        <StyledForm>
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
          <input
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
          <button onClick={this.handleAddStep}>Add A Step</button>
          <button>Submit How2</button>
        </StyledForm>
      </>
    );
  }
}

export default HowToForm;
