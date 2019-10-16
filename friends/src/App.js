import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
<Router>
  <div className="App">
      <div>
          <Link to="/login">Login</Link>
      </div>
      <div>
          <Link to="/friends">Friends</Link>
      </div>
    <Switch>
        <PrivateRoute exact path="/friends" component={FriendsList} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
    </Switch>
  </div>
</Router>
  );
}

export default App;
