import React from "react";
import styled from "styled-components";
import axios from "axios";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: {
        id: this.props.match.params.id,
        title: "",
        description: ""
      }
    };
  }

  submitStep = e => {
    e.preventDefault();
    const id = this.props.match.params.id;
    axios
      .post(
        `https://howto-pt-042219.herokuapp.com/api//howto/${id}/steps`,
        this.state
      )
      .then(res => {
        this.props.submitStep(res.data);
      })
      .catch(err => console.log(err));
    this.setState({
      id: 0,
      title: "",
      description: ""
    });
    this.props.history.push("/howto");
  };

  handleAddStepInput = e => {
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

    // const newContainer = document.createElement("div");
    // newContainer.id = "container";
    // newContainer.appendChild(newContainer);
  };

  render() {
    return (
      <div>
        <div>
          <h1>Add Steps For How2</h1>
          <form onSubmit={this.submitStep}>
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
            <button onClick={this.handleAddStepInput}>Add A Step</button>
            <button>Submit Steps</button>
          </form>
        </div>
      </div>
    );
  }
}

export default StepForm;
