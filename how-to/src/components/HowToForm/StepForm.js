import React from "react";
import styled from "styled-components";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
      <div>
        <div>
          <h1>Add Steps For How2</h1>
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
        </div>
      </div>
    );
  }
}

export default StepForm;
