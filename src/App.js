import React from "react";
import TopBar from "./TopBar";
import Register from './Register';
import Home from './Home';
import Login from './Login';
import Write from './Write';
import Settings from './Settings';
import Single from './Single';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default function App() {
  const user = true;
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
        {user ? <Home/> : <Register />}
        </Route>
        <Route path="/login">
        {user ? <Home /> : <Login />}
        </Route>
        <Route path="/write">
        {user ? <Write /> : <Register />}
        </Route>
        <Route path="/settings">
        {user ? <Settings /> : <Register />}
        </Route>
        <Route path="/post/:postId">
        <Single />
        </Route>
      </Switch>
    </Router>
  );
}
