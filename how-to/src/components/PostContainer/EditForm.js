import React from "react";
import axios from "axios";
import styled from "styled-components";

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
      steps: []
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleStepChange = (e, i) => {
    let steps = [...this.state.steps];
    let step = {...steps[i]};
    step[e.target.name] = e.target.value;
    steps[i] = step;
    this.setState({steps})
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const headers = { authorization: localStorage.getItem("jwt") };
    axios
      .get(`https://howto-pt-042219.herokuapp.com/api/howto/${id}`, { headers })
      .then(res => {
        this.setState({
          howto: res.data,
          steps: res.data.steps,
          title: res.data.title,
          overview: res.data.overview
        });
      })
      .catch(err => console.log(err));
  }

  submitHowtoChanges = e => {
    const id = this.props.match.params.id;
    e.preventDefault();
    axios
      .put(`https://howto-pt-042219.herokuapp.com/api//howto/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  submitStepChanges = (e, i) => {
    const id = this.props.match.params.id;
    const headers = { authorization: localStorage.getItem('jwt') }
    e.preventDefault(); 
    axios
      .put(`https://howto-pt-042219.herokuapp.com/api/howto/${id}/steps/${this.state.steps[i].id}`, this.state.steps[i], { headers })
      .then(res => {
        let steps = [...this.state.steps];
        steps.splice(i, 1);
        this.setState({steps})
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state);
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

        {this.state.steps.map((step, i) => {
          return (
            <InputDiv>
              <h3>Steps:</h3>
              <StyledForm onSubmit={(e) => this.submitStepChanges(e, i)}>
                <StyledInput
                  type="text"
                  value={this.state.steps[i].title}
                  name="title"
                  onChange={(e) => this.handleStepChange(e, i)}
                />
                <StyledInput
                  type="text"
                  value={this.state.steps[i].description}
                  name="description"
                  onChange={(e) => this.handleStepChange(e, i)}
                />
                <StyledSubmit>Submit</StyledSubmit>
              </StyledForm>
            </InputDiv>
          );
        })}
      </StyledContainer>
    );
  }
}

export default EditForm;
