import React, { Component } from "react";
import FormComponent from "./FormComponent";
import Grid from "./Grid";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      rows: 0,
      columns: 0,
      clickedButtons: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleGridChange = this.handleGridChange.bind(this);
  }

  handleChange(event) {
    // let joined = this.state.clickedButtons.concat(coordValue);
    const { name, value } = event.target;
    this.setState({
      [name]: value
      // clickedButtons: joined
    });
  }

  handleGridChange(value) {
    let joined = this.state.clickedButtons.concat(value);
    this.setState({
      clickedButtons: joined
    });
  }

  render() {
    return (
      <div>
        <FormComponent handleChange={this.handleChange} data={this.state} />
        <Grid
          rows={this.state.rows}
          columns={this.state.columns}
          grid={this.state.grid}
          handleChange={this.handleChange}
          handleGridChange={this.handleGridChange}
        />
        {this.state.grid}
        {console.log(this.state)}
        {console.log(JSON.stringify(this.state))}
      </div>
    );
  }
}

export default FormContainer;
