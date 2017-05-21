import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import App from './App';
import About from './About';
import NotFound from './NotFound';

const Routes = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr/>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/about" component={About}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </Router>
)

export default Routes;
