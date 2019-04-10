import React, { Component } from "react";
import Posts from "./Posts";
import CreatePostBar from "./CreatePostBar";
import { last } from "lodash";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        { id: 0, content: "hello friends", likes: 0 },
        { id: 1, content: "chai pilo friends", likes: 0 }
      ]
    };
  }

  updateLikes(id) {
    this.setState({
      posts: this.state.posts.map(post => {
        if (post.id == id) {
          post.likes++;
        }
        return post;
      })
    });
  }

  deletePost(id) {
    this.setState({ posts: this.state.posts.filter(post => post.id != id) });
  }

  addPost(postContent) {
    let newPostId = 0;
    if (last(this.state.posts)) newPostId = last(this.state.posts).id + 1;
    let newPost = { id: newPostId, content: postContent, likes: 0 };
    this.setState(state => {
      return { posts: [...state.posts, newPost] };
    });
  }

  render() {
    return (
      <div className="page">
        <CreatePostBar addPost={this.addPost.bind(this)} />
        <Posts
          posts={this.state.posts}
          updateLikes={this.updateLikes.bind(this)}
          deletePost={this.deletePost.bind(this)}
        />
      </div>
    );
  }
}

export default App;
