import React from "react";
import axios from "axios";
import Step from "./Steps";

class HowTo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      howToData: []
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`https://howto-pt-042219.herokuapp.com/api/howto/${id}`)
      .then(res => {
        this.setState({ howToData: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.howToData.steps);
    return (
      <>
        <h1>{this.state.howToData.title}</h1>
        <h2>{this.state.howToData.author}</h2>
        <p>{this.state.howToData.overview}</p>
        {/* <div>
          {this.state.howToData.steps.map(step => (
            <Step step={step} />
          ))}
        </div> */}
      </>
    );
  }
}

export default HowTo;
