import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import STORE from './STORE'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Main store={STORE}/>
  </BrowserRouter>
  , document.getElementById('root'));
