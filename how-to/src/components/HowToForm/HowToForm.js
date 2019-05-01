import React from "react";

class HowToForm extends React.Component {
  constructor() {
    super();
    this.state = {
      howToData: []
    };
  }
  handleSubmit(step) {
    // push step to DB
  }
  render() {
    return (
      <>
        <h1>Follow Steps To Add How To</h1>
        <form>
          <input type="text" name="title" placeholder="Title of How To" />
          <input placeholder="Step Title" />
          <input type="text" placeholder="Overview" />
          <button>Add A Step</button>
          <button>Add How To!</button>
        </form>
      </>
    );
  }
}

export default HowToForm;
