import React, { Component } from "react";

class InFolder extends Component {

  getFolderByNoteId =() => {
    let notes = this.props.notes
    let folders = this.props.folders

    let expId = this.props.expId
    let thisNote = notes.find(item => item.id === expId)
    let folderId = thisNote.folderId
    let thisFolder = folders.find(item => item.id === folderId)


    return (
      thisFolder
    )
  }

  render(){
    let thisFolder = this.getFolderByNoteId()
    return (
      <li key={thisFolder.id} className="folder">
      Folder: {thisFolder.name}
    </li>
    )
  }

}

export default InFolder
