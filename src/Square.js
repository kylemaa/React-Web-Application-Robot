import React, { Component } from "react";

// class Square extends Component {
//   constructor() {
//     super();
//     this.state = {};
//   }

//   render() {
//     return (
//       <button className="square" onClick={this.handleClick}>
//         {props.value}
//       </button>
//     );
//   }
// }

// function Square(props) {
//   let squareVar;
//   if(!props.clickable){
//     squareVar = <button className="square">{props.value}</button>
//   }
//   else{
//     squareVar = <button className="border-square">{props.value}</button>
//   }
//   return squareVar
// }

class Square extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // this.props.handleGridChange(this.props.coord);
    this.setState(prevState => {
      return {
        isClicked: !prevState.isClicked
      };
    });
    // this.props.clicked = !this.props.clicked;
  }

  render() {
    let buttonValue = this.state.isClicked ? "X" : this.props.coord;
    let squareVar;
    if (!this.props.clickable) {
      squareVar = (
        <button
          className="square"
          onClick={() => {
            this.handleClick();
            this.props.handleGridChange(this.props.coord);
          }}
        >
          {buttonValue}
        </button>
      );
    } else {
      squareVar = <button className="border-square">{this.props.value}</button>;
    }
    return squareVar;
  }
}
export default Square;

//
