import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar.js";
import ScrollToTop from "./components/ScrollToTop.js";
import Dashboard from "./views/Dashboard.js";
import PLB from "./views/PLB";
import CreateNewPLB from "./views/PLB/CreateNewPLB.js";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route
          path="/plb"
          render={({ match: { url } }) => (
            <>
              <Route path={`${url}`} component={PLB} exact />
              <Route path={`${url}/add`} component={CreateNewPLB} />
            </>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
