import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import TableRow from "react-bootstrap/Table";
import TableHead from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "./Form";
import ScrollableAnchor from "react-scrollable-anchor";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(userId, id, title, body) {
    this.setState(prevState => ({
      items: [...prevState.items, { userId, id, title, body }]
    }));
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }
  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="home">
          {/* <Link to="./Form">
            {" "}
            <Button variant="info" type="button">
              Add Item
            </Button>
          </Link> */}

          <Button className="addButton" href="#section1">
            {" "}
            Add Item{" "}
          </Button>

          <TableHead>
            <TableRow>
              <th>User ID</th>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
              <th>Action</th>
            </TableRow>
          </TableHead>
          {items.map(item => (
            <TableRow>
              <tr>
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td>
                  <Link to={"/" + item.id}>
                    <Button variant="outline-secondary" type="button">
                      Details
                    </Button>
                  </Link>
                </td>
              </tr>
            </TableRow>
          ))}

          <ScrollableAnchor id={"section1"}>
            <div>
              {" "}
              <Form addItem={this.addItem} />{" "}
            </div>
          </ScrollableAnchor>
        </div>
      );
    }
  }
}

export default Home;
