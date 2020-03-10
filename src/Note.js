import React, { Component } from "react";

class Note extends Component{

  render() {
    let notes = this.props.notes

    return(
      <ul>
        {this.props.formatNotes(notes)}
        <button>Add note</button>
      </ul>
    )
  }
}

export default Note

