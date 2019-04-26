import React from "react";
import "./App.css";
import HowToList from "./components/PostContainer/HowToList";
import NavBar from "./components/NavBar/NavBar";
function App() {
  return (
    <div className="App">
      <NavBar />
      <HowToList />
    </div>
  );
}

export default App;
