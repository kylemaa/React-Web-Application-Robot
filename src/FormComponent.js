import React from "react";

function FormComponent(props) {
  return (
    <form>
      <label>Rows: </label>
      <input
        value={props.data.rows}
        name="rows"
        onChange={props.handleChange}
        placeholder="row"
      />

      <br />

      <label>Columns: </label>
      <input
        value={props.data.columns}
        name="columns"
        onChange={props.handleChange}
        placeholder="columns"
      />
      <br />
    </form>
  );
}

export default FormComponent;
