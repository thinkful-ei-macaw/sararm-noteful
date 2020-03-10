import React, { Component } from "react";
import Note from './Note'
import FilterNote from './FilterNote'
import { Link } from 'react-router-dom'
import ExpandedNote from './ExpandedNote'


class NoteList extends Component {

  formatDate = (date) => {
    let formatted = new Date(date)
    let newTime =  formatted.getMonth()+1 +'/'+ formatted.getDate() +'/'+  formatted.getFullYear()
    return newTime
  }


  formatNotes = (notes) => {
    let allNotes = notes.map(item => {
      return ( 
      <li className="note" key={item.id}>
        <h2>
          <Link to={'/note/'+ item.id}>{item.name}</Link>
        </h2>
        <p>Last modified on {this.formatDate(item.modified)}</p>
        <button>Delete Note</button>
      </li>
      )
    })
    return allNotes
  }

  render() {
    let noteId = this.props.match.params.noteId
    let folderId = this.props.match.params.folderId
    console.log('note', noteId, 'folder', folderId)
    console.log(this.formatDate)
    return(
      <ul>
        {
          noteId ?
            <ExpandedNote notes={this.props.notes} formatDate={this.formatDate} formatNotes={this.formatNotes} expId={noteId}/>
        : 

          folderId ? 
            <FilterNote 
              notes={this.props.notes}  filterId={this.props.match.params.folderId} formatDate={this.formatDate} formatNotes={this.formatNotes}/>
        : 
          <Note 
            notes={this.props.notes} formatDate={this.formatDate} formatNotes={this.formatNotes}/>
        
        }
        
      </ul>
    )
  }
}

export default NoteList

