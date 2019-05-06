import React from "react";
import axios from "axios";
import styled from "styled-components";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      user_id: 1
    };
  }

  componentDidMount() {
    // const id = this.props.match.params.id;
    // axios
    //   .get(`https://howto-pt-042219.herokuapp.com/api//howto/${id}/reviews`)
    //   .then(res => {
    //     this.setState({ reviews: res.data });
    //   })
    //   .catch(err => console.log(err));
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitReview = e => {
    e.preventDefault();
    const id = this.props.match.params.id;
    axios
      .post(`https://howto-pt-042219.herokuapp.com/api/howto/${id}/reviews`, this.state)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
    this.setState({
      text: "",
    });
    this.props.history.push(`/howto/${id}`);
  };

  render() {
    return (
      <div>
        <h2>Reviews</h2>
        {this.props.reviews.map(review => {
          return (
            <div>
              <p>{review.text}</p>
              <p>by:{review.username}</p>
            </div>
          );
        })}
        <div>
          <h3>Add A Review</h3>
          <form onSubmit={this.submitReview}>
            <textarea
              placeholder="What did you think?"
              name="text"
              value={this.state.text}
              onChange={this.handleChanges}
              rows="8"
              cols="50"
            >
            </textarea>
            <button>Submit Review</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Reviews;
