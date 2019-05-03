import React from "react";
import axios from "axios";
import Step from "./Steps";
import styled from "styled-components";

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

// const DeleteDiv = styled.div`
//   background-color: lightgrey;
//   border-radius: 5px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 15px;
//   margin-top: 5px;
//   border: 1px solid #b41010;
// `;

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

class HowTo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      howToData: [],
      steps: []
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`https://howto-pt-042219.herokuapp.com/api/howto/${id}`)
      .then(res => {
        this.setState({ howToData: res.data, steps: res.data.steps });
      })
      .catch(err => console.log(err));
  }

  toggleDisplay() {
    const element = document.getElementById("delete");
    element.classList.toggle("no-show");
  }

  render() {
    // console.log(this.state.howToData);
    return (
      <ContainerDiv>
        {/* {this.props.username === token.name ? <button onClick={this.handleDelete}>X</button> : null} */}
        <StyledButton onClick={this.toggleDisplay}>X</StyledButton>
        <div id="delete" className="no-show show">
          <h3>Are you sure you want to delete this How To?</h3>
          <ButtonDiv>
            <DeleteButton>Yes</DeleteButton>
            <DeleteButton>No</DeleteButton>
          </ButtonDiv>
        </div>
        <h1>{this.state.howToData.title}</h1>
        <h2>How2 by: {this.state.howToData.author}</h2>
        <p>Overview: {this.state.howToData.overview}</p>
        <p>Steps:</p>
        <div>
          {this.state.steps.map(step => (
            <Step step={step} />
          ))}
        </div>
      </ContainerDiv>
    );
  }
}

export default HowTo;
