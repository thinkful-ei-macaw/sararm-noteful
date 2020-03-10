import React from 'react';
import './App.css';
import Main from './Main'


function App(props) {
  console.log(props)
  return (
    <div className="App">
      <header className="App-header">
        Noteful
      </header>
      <main>
        <Main store={props.store}/>
      </main>
    </div>
  );
}

export default App;

