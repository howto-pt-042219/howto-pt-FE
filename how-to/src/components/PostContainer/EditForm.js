import React from "react";
import axios from "axios";
import styled from "styled-components";

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

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`https://howto-pt-042219.herokuapp.com/api/howto/${id}`)
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

  submitStepChanges = e => {
    const id = this.props.match.params.id;
    e.preventDefault();
    axios
      .put(
        `https://howto-pt-042219.herokuapp.com/api/howto/${id}/steps/${
          this.state.steps.id
        }`
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h3>Title:</h3>
        <form onSubmit={this.submitHowtoChanges}>
          <input
            type="text"
            value={this.state.title}
            name="title"
            onChange={this.handleChange}
          />
          <h3>Overview:</h3>
          <input
            type="text"
            value={this.state.overview}
            name="overview"
            onChange={this.handleChange}
          />
        </form>
        {this.state.steps.map(step => {
          return (
            <div>
              <h3>Steps:</h3>
              <form onSubmit={this.submitStepChanges}>
                <input
                  type="text"
                  value={step.title}
                  name="title"
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  value={step.description}
                  name="description"
                  onChange={this.handleChange}
                />
                <button>Submit</button>
              </form>
            </div>
          );
        })}
      </div>
    );
  }
}

export default EditForm;
