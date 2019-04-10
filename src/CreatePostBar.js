import React, { Component } from "react";

class CreatePostBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  updateValue(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div>
        <input onChange={this.updateValue.bind(this)} />
        <button onClick={this.props.addPost.bind(null, this.state.value)}>
          Share Post
        </button>
      </div>
    );
  }
}

export default CreatePostBar;
