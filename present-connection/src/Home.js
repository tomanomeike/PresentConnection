import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";

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
        <div className="Home">
          <Link to="./Form">Add Item</Link>><th>User id</th>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
          {items.map(item => (
            <table key={item.id}>
              <tr>
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td>
                  <Link to={"/" + item.id}>More details>></Link>>
                </td>
              </tr>
            </table>
          ))}
        </div>
      );
    }
  }
}

export default Home;
