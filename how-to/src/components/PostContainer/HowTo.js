import React from "react";
import axios from "axios";

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
    console.log(this.state);
    return <div>'sup yo'</div>;
  }
}
export default HowTo;
