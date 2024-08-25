import React from "react";
import TopBar from "./TopBar";
import Register from './Register';
import Home from './Home';
import Login from './Login';
import Write from './Write';
import Settings from './Settings';
import Single from './Single';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App() {
  const currentUser = true;
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route path="">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
