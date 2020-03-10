import React, { Component } from "react";

class FilterNote extends Component{


  getFilterNotes = (notes) => {
    let filterBy = this.props.filterId;
    let filterNotes = notes.filter(item =>
      item.folderId === filterBy)
      console.log('lsdkfj')
    return this.props.formatNotes(filterNotes)
  }

  render() {
    let notes = this.props.notes

    return(
      <ul>
        {this.getFilterNotes(notes)}
        <button>Add note</button>
      </ul>
    )
  }

}

export default FilterNote

