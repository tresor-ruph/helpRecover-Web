import React, { useEffect } from "react";
import Home from "./home";
import Login from "../Admin/Login";
import Dashboard from "../Admin/Dashboard";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import ls from "local-storage";

export default function Main() {
 const getId =()=> {
  let value
    try {
      value = ls.get("login");
      console.log(value)
    } catch (err) {
      console.log(err);
    }
    return value
  }
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/adminLogin" component={Login} />
      {getId() == true? (
        <Route exact path="/dashboard" component={Dashboard} />
      ) : (
    console.log('test')
      )}
    </Switch>
  );
}
