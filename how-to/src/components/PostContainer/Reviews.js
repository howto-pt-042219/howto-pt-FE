import React from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // align-items: flex-end;
`;

const ReviewDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightgrey;
  border-radius: 10px;
  padding: 10px;
  width: 300px;
  margin-top: 10px;
`;

const AuthorP = styled.p`
  display: flex;
  align-self: flex-end;
  font-weight: bold;
`;

const ReviewsH2 = styled.h2`
  display: flex;
  align-self: center;
`;

const StyledSubmit = styled.button`
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

const StyledForm = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const MapDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 10px;
`;

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
      .post(
        `https://howto-pt-042219.herokuapp.com/api/howto/${id}/reviews`,
        this.state
      )
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
    this.setState({
      text: ""
    });
    this.props.history.push(`/howto/${id}`);
  };

  render() {
    return (
      <ContainerDiv>
        <ReviewsH2>Reviews</ReviewsH2>
        <MapDiv>
          {this.props.reviews.map(review => {
            return (
              <ReviewDiv>
                <p>{review.text}</p>
                <AuthorP>by: {review.username}</AuthorP>
              </ReviewDiv>
            );
          })}
        </MapDiv>
        <div>
          <h3>Add A Review</h3>
          <StyledForm onSubmit={this.submitReview}>
            <textarea
              placeholder="What did you think?"
              name="text"
              value={this.state.text}
              onChange={this.handleChanges}
              rows="8"
              cols="50"
            />
            <StyledSubmit>Submit</StyledSubmit>
          </StyledForm>
        </div>
      </ContainerDiv>
    );
  }
}

export default Reviews;
