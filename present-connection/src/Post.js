import React, { Component } from "react";
import { connect } from "react-redux";

class Post extends Component {
  render() {
    const post = this.props.post ? (
      <h4>{this.props.post.body}</h4>
    ) : (
      <div>Loading....</div>
    );
    return <div>{post}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.items.find(post => post.id === id)
  };
};

export default connect(mapStateToProps)(Post);
