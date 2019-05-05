import React from "react";
import axios from "axios";
import styled from "styled-components";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      title: "",
      description: ""
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`https://howto-pt-042219.herokuapp.com/api//howto/${id}/reviews`)
      .then(res => {
        this.setState({ reviews: res.data });
      })
      .catch(err => console.log(err));
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitReview = e => {
    e.preventDefault();
    const id = this.props.match.params.id;
    axios
      .post(
        `https://howto-pt-042219.herokuapp.com/api//howto/${id}/steps`,
        this.state
      )
      .then(res => {
        this.props.submitData(res.data);
      })
      .catch(err => console.log(err));
    this.setState({
      id: 0,
      title: "",
      description: ""
    });
    this.props.history.push(`/howto/${id}`);
  };

  render() {
    return (
      <div>
        <h2>Reviews</h2>
        {/* {this.state.reviews.map(review => {
            <div>
                <h3>{review.title}</h3>
                <p>{review.description}</p>
            </div>
        })} */}
        <div>
          <h3>Add A Review</h3>
          <form onSubmit={this.props.submitData}>
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={this.state.title}
              onChange={this.handleChanges}
            />
            <input
              type="text"
              placeholder="Review"
              name="description"
              value={this.state.description}
              onChange={this.handleChanges}
            />
            <button>Submit Review</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Reviews;
