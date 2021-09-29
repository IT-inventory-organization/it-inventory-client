import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Dashboard from "./views/Dashboard.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
