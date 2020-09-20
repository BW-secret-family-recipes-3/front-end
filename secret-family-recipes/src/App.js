// third-party imports
import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// component imports
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute"
import Dashboard from "./components/Dashboard"

// app component
function App() {
  return (
    <div className="App">
      <h1>Secrete Family Recipes</h1>
      <Router>
        <Switch>
          {/* ------------- React-1 team ---------------- */}
          <Route exact path = "/" component = {Home}/>
          <Route path = "/user/login" component = {Login}/>
          <Route path = "/user/register" component = {Register}/>
          {/* ------------- React-2 team ---------------- */}
          <PrivateRoute path = "/user/dashboard" component = {Dashboard}/>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
