import React, { Component } from "react";
import ReactDOM from "react-dom";
// import Square from "./Square";
import Grid from "./Grid";
import FormContainer from "./FormContainer";

import "./styles.css";

// function App() {
//   return (
//     <div>
//       <Square />
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <FormContainer />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
