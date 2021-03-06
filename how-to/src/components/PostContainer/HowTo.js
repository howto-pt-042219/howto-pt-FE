import React from "react";
import axios from "axios";
import Step from "./Steps";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Reviews from "./Reviews";

const StyledButton = styled.button`
  display: flex;
  border: none;
  color: white;
  background-color: #b41010;
  // margin-left: 146px;
  align-self: flex-end;
`;

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightblue;
  height: 100%;
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
  margin-right: 5px;
  margin-top: 14px;
  height: 25px;
  :hover {
    color: #b41010;
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
`;

const EditButton = styled.button`
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

const LikeButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: lightgrey;
  border-radius: 10px;
  width: 100%;
  padding: 10px;
`;

const PostDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white;
  width: 700px;
  border-radius: 10px;
  margin-top: 10px;
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
      reviews: []
    };
  }

  componentDidMount() {
    this.updateHowto();
  }

  toggleDisplay() {
    const element = document.getElementById("delete");
    element.classList.toggle("no-show");
  }

  updateHowto = () => {
    const { id } = this.props.match.params;
    const headers = { authorization: localStorage.getItem("jwt") };
    axios
      .get(`https://howto-pt-042219.herokuapp.com/api/howto/${id}`, { headers })
      .then(res => {
        this.setState({
          howToData: res.data,
          steps: res.data.steps,
          reviews: res.data.reviews
        });
      })
      .catch(err => console.log(err));
  };

  deleteHowTo = e => {
    const id = this.props.match.params.id;
    this.props.deleteHowTo(id);
    this.forceUpdate();
    this.props.history.push("/howto");
  };

  addLikes = (e, i) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const headers = { authorization: localStorage.getItem("jwt") };
    axios
      .post(`https://howto-pt-042219.herokuapp.com/api/howto/${id}/liked`, id, {
        headers
      })
      .then(() => {
        // this.setState(prevState => {
        //   return {
        //     likes: prevState.liked ? prevState.likes - 1 : prevState.likes + 1,
        //     liked: !prevState.liked
        //   };
        // })
        this.updateHowto();
      })

      .catch(err => console.log(err));
  };

  render() {
    // console.log(this.state);
    return (
      <ContainerDiv>
        {/* {this.props.username === token.name ? <button onClick={this.handleDelete}>X</button> : null} */}

        <PostDiv>
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
          </div>

          <LikeButtonDiv>
            <Link to={`/edit-form/${this.props.match.params.id}`}>
              <EditButton>Edit </EditButton>
            </Link>
            <LikeDiv>
              <LikeButton onClick={this.addLikes}>Like</LikeButton>
              <p>Likes: {this.state.howToData.likes}</p>
            </LikeDiv>
          </LikeButtonDiv>
        </PostDiv>

        <Reviews
          {...this.props}
          updateHowto={this.updateHowto}
          reviews={this.state.reviews}
        />
        <div />
      </ContainerDiv>
    );
  }
}

export default HowTo;
