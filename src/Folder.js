import React, { Component } from "react";
import { Link } from 'react-router-dom'


class Folder extends Component {
  render() {
    let folders = this.props.folders
    let folderList = 
      folders.map(item => {
        return (
          <li key={item.id} className="folder">
            <Link to={"/folder/" + item.id }>Folder: {item.name}</Link>
          </li>
        )
      })
      
    return(
      <ul>
        {folderList}
        <button>Add Folder</button>
      </ul>
    )
  }
}

export default Folder