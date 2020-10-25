import React from 'react';
import Entete from './Component/Entete'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route } from 'react-router-dom';
import chat from "./Component/chat"
import home from "./Component/home"


function App() {
  return (
    <div className="App">
      <Router>
          <Entete />
          <Route exact path="/login" component={chat}/>
          <Route exact path="/account" component={chat}/>
          <Route exact path="/home" component={home}/>
          <Route exact path="/chat" component={chat}/>
    </Router>
    </div>
  );
}

export default App;
