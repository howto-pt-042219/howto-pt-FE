import React from "react";
import styled from "styled-components";
import axios from "axios";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightblue;
  height: 100%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input`
  display: flex;
  width: 500px;
  padding 5px;
  height: auto;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
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

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addedSteps: [],
      step: {
        title: "",
        description: "",
        num: 1
      }
    };
  }

  handleChanges = event => {
    this.setState({
      step: { ...this.state.step, [event.target.name]: event.target.value }
    });
  };

  submitStep = e => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const headers = { authorization: localStorage.getItem("jwt") };
    axios
      .post(
        `https://howto-pt-042219.herokuapp.com/api/howto/${id}/steps`,
        this.state.step,
        { headers }
      )
      .then(res => {
        this.fetchSteps();
      })
      .catch(err => console.log(err));
    this.setState({
      step: {
        title: "",
        description: "",
        num: this.state.step.num + 1
      }
    });
  };

  fetchSteps = () => {
    const id = this.props.match.params.id;
    const headers = { authorization: localStorage.getItem("jwt") };
    axios
      .get(`https://howto-pt-042219.herokuapp.com/api/howto/${id}/steps`, {
        headers
      })
      .then(res => {
        this.setState({ addedSteps: res.data });
      })
      .catch(err => console.log(err));
  };

  finishAdding = () => {
    const id = this.props.match.params.id;
    this.props.submitData();
    this.props.history.push(`/howto/${id}`);
  };

  render() {
    return (
      <ContainerDiv>
        <div>
          <h1>Add Steps For How2</h1>
          <ol>
            {this.state.addedSteps.map(step => (
              <li>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>

          <StyledForm onSubmit={this.submitStep}>
            <StyledInput
              value={this.state.step.title}
              onChange={this.handleChanges}
              name="title"
              placeholder="Step Title"
              type="text"
            />
            <StyledInput
              value={this.state.step.description}
              onChange={this.handleChanges}
              name="description"
              placeholder="Step Description"
              type="text"
            />
            <SubmitButton>Submit Steps</SubmitButton>
          </StyledForm>
          <SubmitButton onClick={this.finishAdding}>Done</SubmitButton>
        </div>
      </ContainerDiv>
    );
  }
}

export default StepForm;
