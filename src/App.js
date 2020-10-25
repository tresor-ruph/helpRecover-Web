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
<<<<<<< HEAD
      <Router>
          <Entete />
          <Route exact path="/login" component={chat}/>
          <Route exact path="/account" component={chat}/>
          <Route exact path="/home" component={home}/>
          <Route exact path="/chat" component={chat}/>
    </Router>
=======
      <header className="App-header">  
          <h1>Help Recover test deploy</h1>
      </header>
>>>>>>> 35af0d805c55ecf7ecaab52053c6f72f64ccd81f
    </div>
  );
}

export default App;
