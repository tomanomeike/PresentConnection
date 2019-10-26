import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

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
          <Link to="./Form">Add Item>></Link>
          <th style={{ width: "10vw" }}>User id</th>
          <th style={{ width: "10vw" }}>Id</th>
          <th>Title</th>
          <th>Body</th>
          <th>Action</th>
          {items.map(item => (
            <Table>
              <tr>
                <td style={{ width: "1vw" }}>{item.userId}</td>
                <td style={{ width: "1vw" }}>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td style={{ width: "1vw" }}>
                  <Link to={"/" + item.id}>
                    <Button variant="info" type="button">
                      More details>>
                    </Button>
                  </Link>
                </td>
              </tr>
            </Table>
          ))}
        </div>
      );
    }
  }
}

export default Home;
