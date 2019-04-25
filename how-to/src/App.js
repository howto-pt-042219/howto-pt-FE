import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Login</h1>
      <form>
        <input placeholder="Username" />
        <input placeholder="Password" />
        <button>Submit</button>
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default App;
