import React, { Component } from "react";

class Folder extends Component {
  render() {
    let folders = this.props.folders
    let folderList = 
      folders.map(item => {
        return (
          <li key={item.id} className="folder" onClick={this.props.folderClick}>
            <p>Folder: {item.name}</p>
          </li>
        )
      })
      
    return(
      <ul>
        {folderList}
      </ul>
    )
  }
}

export default Folder