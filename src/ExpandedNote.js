import React, { Component } from "react";


class ExpandedNote extends Component {


formatNotes = () => {
  let expId = this.props.expId
  let notes = this.props.notes
  let expNote = notes.find(item => 
    item.id === expId)
  
  console.log(this.props)
  return (
    <li className="note" key={expNote.id}>
        <h2>
          {expNote.name}
        </h2>
        <p>{expNote.content}</p>
        <p>Last modified on {this.props.formatDate(expNote.modified)}</p>
        <button>Delete Note</button>
      </li>
  )
}

  render(){
    return(
      <div>
        {this.formatNotes()}
      </div>
    )
  }

}

export default ExpandedNote