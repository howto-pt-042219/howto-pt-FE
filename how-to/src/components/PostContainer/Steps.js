import React from "react";

function Steps(props) {
  return (
    <div>
      <ol>
        <li>{props.step.title}</li>
      </ol>
      <p>{props.step.description}</p>
    </div>
  );
}

export default Steps;
