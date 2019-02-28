import React, { Component } from "react";
import Square from "./Square";

class Grid extends Component {
  constructor() {
    super();
    this.state = {};
    this.createGrid = this.createGrid.bind(this);
  }

  renderSquare(keyParam, i, j) {
    return (
      // <div key={key}>
      <Square
        key={keyParam}
        coord={keyParam}
        value={i}
        clickable={j}
        handleChange={this.props.handleChange}
        clicked={false}
        handleGridChange={this.props.handleGridChange}
      />
      // </div>
    );
  }

  createGrid(x, y) {
    let grid = [];
    for (let i = 0; i <= x; i++) {
      let children = [];
      for (let j = 0; j <= y; j++) {
        let coord = String.fromCharCode(96 + i);
        coord += j.toString();

        if (i === 0 && j === 0) {
          children.push(this.renderSquare(coord, "", true));
        } else if (j === 0) {
          children.push(
            this.renderSquare(coord, String.fromCharCode(96 + i), true)
          );
        } else if (i === 0) {
          children.push(this.renderSquare(coord, j, true));
        } else {
          children.push(this.renderSquare(coord));
        }
      }
      grid.push(
        <div className="board-row" key={i}>
          {children}
        </div>
      );
    }
    // return <div>{grid}</div>;
    return grid;
  }

  render() {
    let newGrid = this.createGrid(this.props.rows, this.props.columns);
    // console.log(newGrid);
    return (
      <div>
        {newGrid}
        <button name="grid" onClick={this.props.handleChange} value={newGrid}>
          Update
        </button>
      </div>
    );
  }
}

export default Grid;
