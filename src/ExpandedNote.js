import React, { Component } from "react";


class ExpandedNote extends Component {


formatNotes = (notes) => {
  let allNotes = notes.map(item => {
    return (
    <li className="note" key={item.id}>
      <h2>
        <Link to={'/note'+ item.id}>{item.name}</Link>
      </h2>
      <p>Last modified on {this.formatDate(item.modified)}</p>
      <button>Delete Note</button>
    </li>
    )
  })
  return allNotes
}