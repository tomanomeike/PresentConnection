import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  state = {
    item: null
  };
  componentDidMount() {
    let id = this.props.match.params.item_id;
    axios.get("https://jsonplaceholder.typicode.com/posts/" + id).then(res => {
      this.setState({
        item: res.data
      });
      console.log(res);
    });

    //   fetch("https://jsonplaceholder.typicode.com/posts").then(res => {
    //     this.setState({
    //       item: res.data
    //     });
    //     console.log(res);
    //   });
  }
  render() {
    const item = this.state.item ? (
      <div className="details">
        <h4> {this.state.item.title}</h4>
        <p>{this.state.item.body}</p>
      </div>
    ) : (
      <div>Loading post</div>
    );
    return <div>{item}</div>;
  }
}

export default Post;
