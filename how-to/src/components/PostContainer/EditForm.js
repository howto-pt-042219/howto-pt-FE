import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightblue;
  height: 100%;
`;

const StyledInput = styled.input`
  width: 400px;
  padding: 10px;
`;

const StyledSubmit = styled.button`
  display: flex;
  width: 75px;
  border-radius: 10px;
  background-color: #2384a8;
  color: white;
  height: 25px;
  margin-top: 14px;
  :focus {
    outline: none;
  }
`;

const StepInput = styled.button`
  display: flex;
  width: 75px;
  border-radius: 10px;
  background-color: #2384a8;
  color: white;
  height: 25px;
  margin-top: 14px;
  margin-bottom: 10px;
  :focus {
    outline: none;
  }
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexH3 = styled.h3`
  display: flex;
  align-self: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      howto: [],
      title: "",
      overview: "",
      stepTitle: "",
      stepDescription: "",
      steps: []
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleStepChange = id => {
    this.setState(state => {
      let temp = state.steps.map(step => {
        if (step.id === id) {
          return {
            ...step,
            title: this.state.stepTitle,
            description: this.state.stepDescription
          };
        } else {
          return { ...step };
        }
      });
      return temp;
    });
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    const headers = { authorization: localStorage.getItem("jwt") };
    axios
      .get(`https://howto-pt-042219.herokuapp.com/api/howto/${id}`, { headers })
      .then(res => {
        console.log(res.data.steps);
        this.setState({
          howto: res.data,
          steps: res.data.steps,
          title: res.data.title,
          stepTitle: res.data.steps.title,
          stepDescription: res.data.steps.description,
          overview: res.data.overview
        });
      })
      .catch(err => console.log(err));
  }

  submitHowtoChanges = e => {
    const id = this.props.match.params.id;
    const headers = { authorization: localStorage.getItem("jwt") };
    e.preventDefault();
    axios
      .put(
        `https://howto-pt-042219.herokuapp.com/api//howto/${id}`,
        { title: this.state.title, overview: this.state.overview },
        { headers }
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  submitStepChanges = (e, stepId) => {
    const id = this.props.match.params.id;
    e.preventDefault();
    axios
      .put(
        `https://howto-pt-042219.herokuapp.com/api/howto/${id}/steps/${stepId}`
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    // console.log(this.state);
    return (
      <StyledContainer>
        <InputDiv>
          <h3>Title:</h3>
          <StyledForm onSubmit={this.submitHowtoChanges}>
            <StyledInput
              type="text"
              value={this.state.title}
              name="title"
              onChange={this.handleChange}
            />
            <FlexH3>Overview:</FlexH3>
            <StyledInput
              type="text"
              value={this.state.overview}
              name="overview"
              onChange={this.handleChange}
            />
            <StyledSubmit>Submit</StyledSubmit>
          </StyledForm>
        </InputDiv>
        <Link to={`/edit-step-form/${this.props.match.params.id}`}>
          <StyledSubmit>Edit Steps</StyledSubmit>
        </Link>
        {this.state.steps.map(step => {
          return <EditStepForm step={step} steps={this.state.steps} />;
        })}
      </StyledContainer>
    );
  }
}

export default EditForm;
