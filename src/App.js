import React from 'react';
import Entete from './Component/Entete'
import Home from './Component/home'
import Team from './Component/Team'
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './Component/Footer'

function App() {
  return (
    <div className="App">
      <Router>
          <Home></Home>
          {/*<Route exact path="/login" component={chat}/>
          <Route exact path="/account" component={chat}/>
          <Route exact path="/home" component={home}/>
  <Route exact path="/chat" component={chat}/>*/}
    </Router>
    </div>
  );
}

export default App;
