import React, { Component } from "react";
import img from "../assets/Dog.jpg";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <img src={img} />
      </div>
    );
  }
}

export default App;
