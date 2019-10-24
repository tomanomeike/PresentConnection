import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const userId = form.elements["userId"].value;
    const id = form.elements["id"].value;
    const title = form.elements["title"].value;
    const body = form.elements["body"].value;
    this.props.addItem(userId, id, title, body);
    form.reset();
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <input
          id="userId"
          type="text"
          defaultValue=""
          placeholder="User ID.."
        />
        <input id="id" type="text" defaultValue="" placeholder="Id..." />
        <input id="title" type="text" defaultValue="" placeholder="Title..." />
        <input id="body" type="text" defaultValue="" placeholder="Body..." />
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default Form;
