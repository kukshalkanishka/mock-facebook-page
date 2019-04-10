import React, { Component } from "react";
import "./index.css";

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="post">
        <div>{this.props.post.content}</div>
        <div>{this.props.post.likes}</div>
        <button onClick={this.props.deletePost}>Delete</button>
        <button onClick={this.props.updateLikes} />
      </div>
    );
  }
}

export default Post;
