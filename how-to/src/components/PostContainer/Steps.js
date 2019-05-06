import React from "react";

function Steps(props) {
  return (
    <>
      <li>{props.step.title}</li>
      <p>{props.step.description}</p>
    </>
  );
}

export default Steps;
