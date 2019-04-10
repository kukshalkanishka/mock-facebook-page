import React, { Component } from "react";
import Post from "./Post";
import "./index.css";

class Posts extends Component {
  render() {
    let posts = this.props.posts.map(post => {
      return (
        <Post
          post={post}
          updateLikes={this.props.updateLikes.bind(null, post.id)}
          deletePost={this.props.deletePost.bind(null, post.id)}
        />
      );
    });
    return <div className="posts">{posts}</div>;
  }
}

export default Posts;
