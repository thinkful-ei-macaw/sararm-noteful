import React, { Component } from "react";

class Note extends Component{
  formatDate(date){
    let formatted = new Date(date)
    let newTime =  formatted.getMonth()+1 +'/'+ formatted.getDate() +'/'+  formatted.getFullYear()
    return newTime
  }

  render() {
    let notes = this.props.notes
    let allNotes = notes.map(item => {
      //if expanded = true, display expanded
      return (
      <li className="note" key={item.id}>
        <h2>{item.name}</h2>
        <p>Last modified on {this.formatDate(item.modified)}</p>
        <button>Delete Note</button>
      </li>
      )
    })

    return(
      <ul>
        {this.props.filter && 'filtered Results'}
        {!this.props.filter && allNotes}
      </ul>
    )
  }

}

export default Note