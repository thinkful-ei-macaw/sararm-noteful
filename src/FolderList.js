import React, { Component } from "react";
import Folder from './Folder'

class FolderList extends Component {
    render() {
      return(
        <ul>
          <Folder folderClick={this.props.folderClick} folders={this.props.folders} />
        </ul>
      )
    }
}

export default FolderList