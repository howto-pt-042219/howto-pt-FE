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
    const headers = { authorization: localStorage.getItem('jwt') }
    axios
      .get(`https://howto-pt-042219.herokuapp.com/api/howto/${id}`, { headers })
      .then(res => {
        this.setState({ howto: res.data, steps: res.data.steps, title: res.data.title, overview: res.data.overview });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h3>Title:</h3>
        <form>
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
            </div>
          );
        })}
      </div>
    );
  }
}

export default EditForm;
