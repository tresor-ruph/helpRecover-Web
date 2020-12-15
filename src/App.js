import React from 'react';
import Main from './Component/Main'
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
          <Main />
    </Router>
    </div>
  );
}

export default App;
