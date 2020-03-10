import React, { Component } from "react";
import Folder from './Folder'
import InFolder from "./InFolder";

class FolderList extends Component {

    render() {
      return(
        <ul>
        {
          this.props.match.params.noteId ?
          
          <InFolder folders={this.props.folders} notes={this.props.notes} expId={this.props.match.params.noteId}/>
        :
          <Folder folders={this.props.folders} />
        }  
        </ul>
      )
    }
}

export default FolderList

