import React from "react";
import axios from "axios";
import styled from "styled-components";

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      howto: []
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .post(`https://howto-pt-042219.herokuapp.com/api/howto/${id}`)
      .then(res => {
        this.setState({ howto: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    // console.log(this.props.match.params.id);
    return <div>yo</div>;
  }
}

export default EditForm;
