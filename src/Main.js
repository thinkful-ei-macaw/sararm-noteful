import React, { Component } from "react";
import Folder from './FolderList'
import Note from './NoteList'
import './Main.css';


class Main extends Component {
  state = {
    folders: this.props.store.folders,
    notes: this.props.store.notes,
    folderFilter: false,
    expanded: false,
    expandedId: '',
  }

  handleFolderClick = () => {
    console.log('clicked')
    this.setState(prevState => ({
      folderFilter: !prevState.folderFilter
    }))
    
  }

    render() {
      console.log(this.state.folderFilter)
      return(
        <div className="content">
          <div className="sidebar">
          <Folder folders={this.state.folders} folderClick={this.handleFolderClick}/>
          <button>Add Folder</button>
          </div>
          <Note notes={this.state.notes} filter={this.state.folderFilter}/>
        </div>
      )
    }

}

export default Main