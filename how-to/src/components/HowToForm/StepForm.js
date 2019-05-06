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
      addedSteps: [],
      step: {
        title: "",
        description: "",
        num: 1
      }
    };
  }

  handleChanges = event => {
    this.setState({ step: {...this.state.step, [event.target.name]: event.target.value} })
  }

  submitStep = e => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const headers = { authorization: localStorage.getItem('jwt') }
    axios
      .post(`https://howto-pt-042219.herokuapp.com/api/howto/${id}/steps`, this.state.step, { headers })
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
    const headers = { authorization: localStorage.getItem('jwt') }
    axios.get(`https://howto-pt-042219.herokuapp.com/api/howto/${id}/steps`, { headers })
      .then(res => {
        this.setState({ addedSteps: res.data });
      })
      .catch(err => console.log(err));
  }

  finishAdding = () => {
    const id = this.props.match.params.id;
    this.props.submitData();
    this.props.history.push(`/howto/${id}`);
  };

  render() {
    return (
      <div>
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
          
          <form onSubmit={this.submitStep}>
            <input
              value={this.state.step.title}
              onChange={this.handleChanges}
              name="title"
              placeholder="Step Title"
              type='text'
            />
            <input
              value={this.state.step.description}
              onChange={this.handleChanges}
              name="description"
              placeholder="Step Description"
              type='text'
            />
            <button>Submit Steps</button>
          </form>
          <button onClick={this.finishAdding}>Done</button>
        </div>
      </div>
    );
  }
}

export default StepForm;
