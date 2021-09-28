import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Dashboard from './components/Dashboard.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
