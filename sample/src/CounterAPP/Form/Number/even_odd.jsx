import React, { Component } from "react";

class Even_Odd extends Component {
  constructor() {
    super();
    this.state = { text: "" };
  }

  formChange = (event) => {
 
    this.setState({ text: event.target.value });
  };

  handleFormEvent = (event) => {
    event.preventDefault();
    let value = this.state.text;
    let message = value % 2 === 0 ? "Even" : "odd";
    this.setState({ text:` ${this.state.text } is ${message}` });
  };

  render() {
    return (
      <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"100vh",  border:'2px solid black'}}>
        <p>Task -9  [ 30-11-2024
        ]</p>
        <form onSubmit={this.handleFormEvent}>
          <input
            type="number"
            id="data"
            name="data"
            onChange={this.formChange}
          />
          <input type="submit" />
        </form>
        <p style={{margin: "30px"}}>{this.state.text}</p>
      </div>
    );
  }
}
export default Even_Odd;
