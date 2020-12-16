import React, { useEffect } from "react";
import Home from "./home";
import Login from "../Admin/Login";
import Dashboard from "../Admin/Dashboard";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import ls from "local-storage";

export default function Main() {

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/adminLogin" component={Login} />
     
        <Route exact path="/dashboard" component={Dashboard} />
    
    </Switch>
  );
}
