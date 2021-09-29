import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Dashboard from "./views/Dashboard.js";
import PLB from "./views/PLB.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/plb">
          <PLB />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
