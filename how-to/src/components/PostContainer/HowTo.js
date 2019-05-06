import React from "react";
import axios from "axios";
import Step from "./Steps";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Reviews from "./Reviews";

const StyledButton = styled.button`
  border: none;
  color: white;
  background-color: #b41010;
  margin-left: 146px;
`;

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
`;

const DeleteButton = styled.button`
  border: none;
  background-color: #b41010;
  border-radius: 5px;
  width: 75px;
  height: 20px;
  :hover {
    background-color: lightgrey;
    color: #b41010;
    border: 1px solid #b41010;
  }
`;

const LikeButton = styled.button`
  width: 75px;
  border-radius: 10px;
  background-color: #2384a8;
  color: white;
  :hover {
    color: #b41010;
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
`;

const LikeDiv = styled.div`
  display: flex;
`;

class HowTo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      howToData: [],
      steps: [],
      reviews: [],
      liked: false
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`https://howto-pt-042219.herokuapp.com/api/howto/${id}`)
      .then(res => {
        this.setState({
          howToData: res.data,
          steps: res.data.steps,
          reviews: res.data.reviews
        });
      })
      .catch(err => console.log(err));
  }

  toggleDisplay() {
    const element = document.getElementById("delete");
    element.classList.toggle("no-show");
  }

  deleteHowTo = e => {
    const id = this.props.match.params.id;
    this.props.deleteHowTo(id);
    this.props.history.push("/howto");
  };

  addLikes = (e, i) => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        likes: prevState.liked ? prevState.likes - 1 : prevState.likes + 1,
        liked: !prevState.liked
      };
    });
    const id = this.props.match.params.id;
    axios
      .post(`https://howto-pt-042219.herokuapp.com/api/howto/${id}`)
      .then(
        this.setState(prevState => {
          return {
            likes: prevState.liked ? prevState.likes - 1 : prevState.likes + 1,
            liked: !prevState.liked
          };
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    // console.log(this.state);
    return (
      <ContainerDiv>
        {/* {this.props.username === token.name ? <button onClick={this.handleDelete}>X</button> : null} */}
        <StyledButton onClick={this.toggleDisplay}>X</StyledButton>
        <div id="delete" className="no-show show">
          <h3>Are you sure you want to delete this How To?</h3>
          <ButtonDiv>
            <DeleteButton onClick={this.deleteHowTo}>Yes</DeleteButton>
            <DeleteButton onClick={this.toggleDisplay}>No</DeleteButton>
          </ButtonDiv>
        </div>
        <h1>{this.state.howToData.title}</h1>
        <h2>How2 by: {this.state.howToData.author}</h2>
        <p>Overview: {this.state.howToData.overview}</p>
        <p>Steps:</p>
        <div>
          <ol>
            {this.state.steps.map(step => (
              <Step step={step} />
            ))}
          </ol>
          <LikeDiv>
            <LikeButton onClick={this.addLikes}>Like</LikeButton>
            <p>{this.state.howToData.likes}</p>
          </LikeDiv>
          <Link to={`/edit-form/${this.props.match.params.id}`}>
            <button>Edit How2</button>
          </Link>
        </div>
        <Reviews
          {...this.props}
          submitData={this.props.submitData}
          reviews={this.state.reviews}
        />
        <div />
      </ContainerDiv>
    );
  }
}

export default HowTo;
