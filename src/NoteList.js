import React, { Component } from "react";
import Note from './Note'

class NoteList extends Component {

  render() {
    return(
      <ul>
        <Note notes={this.props.notes} filter={this.props.filter}/>
      </ul>
    )
  }
}

export default NoteList

