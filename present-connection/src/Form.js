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
  onChange = e => {
    this.setState({
      id: e.target.value
    });
  };

  render() {
    return (
      <form className="form" onSubmit={this.formSubmit}>
        <h4>Add new Item</h4>
        <input
          id="userId"
          type="text"
          defaultValue=""
          placeholder="User ID.."
        />
        <input id="id" type="text" defaultValue="" placeholder="Id..." />
        <input id="title" type="text" defaultValue="" placeholder="Title..." />
        <input id="body" type="text" defaultValue="" placeholder="Body..." />
        <input type="submit" value="submit" onClick={this.submitForm} />
        {/* <Link to="./">
          {" "}
          <Button variant="info" type="button">
            Submit
          </Button>
        </Link> */}
        {/* <button>Submit</button> */}
      </form>
    );
  }
}

export default Form;
