import React from "react";

function Steps(props) {
  return (
    <div>
      <ol>
        <li>{props.title}</li>
      </ol>
      <p>{props.description}</p>
    </div>
  );
}

export default Steps;
