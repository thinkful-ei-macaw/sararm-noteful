import React, { Component } from "react";
import FolderList from './FolderList'
import NoteList from './NoteList'
import './Main.css';
import { Route, Link } from 'react-router-dom'


class Main extends Component {
  state = {
    folders: this.props.store.folders,
    notes: this.props.store.notes,
  }

    render() {

      console.log(this.props)

      return(
        <div className="App">
          <header className="App-header">
            <h1>
              <Link to="/">Noteful</Link>
            </h1>
          </header>
          <main>
            <div className="sidebar">

            <Route exact path='/' 
              render={(routeProps) =>
              <FolderList {...routeProps} folders={this.state.folders}
              notes={this.state.notes}
              />
              }
            />

            <Route exact path='/folder/:folderId'
              render={(routeProps) =>
              <FolderList {...routeProps} folders={this.state.folders}
              notes={this.state.notes}
              />
              }
            />
            
            <Route exact path='/note/:noteId'
              render={(routeProps) =>
              <FolderList {...routeProps} folders={this.state.folders} 
              notes={this.state.notes} 
              />
              }
            />
            </div>

            <div className="content">
            <Route exact path='/'
              render={(routeProps) =>
              <NoteList {...routeProps} notes={this.state.notes}  
              />
              }
            />

            <Route exact path='/folder/:folderId'
              render={(routeProps) =>
              <NoteList {...routeProps} notes={this.state.notes} 
              />
              }
            />

            <Route exact path='/note/:noteId'
              render={(routeProps) =>
              <NoteList {...routeProps} notes={this.state.notes} 
              />
              }
            />
            </div>
          </main> 
        </div>
      )
    }
    
}

export default Main

