import React from "react";
import TopBar from "./TopBar";
import Register from './Register';
import Home from './Home';
import Login from './Login';
import Write from './Write';
import Settings from './Settings';
import Single from './Single';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export default function App() {
  const currentUser = true;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/posts'>
          <Home />
        </Route>
        <Route path='/register'>{currentUser ? <Home /> : <Register />}</Route>
        <Route path='/login'>{currentUser ? <Home /> : <Login />}</Route>
        <Route path='/post/:id'>{<Single />}</Route>
        <Route path='/write'> {currentUser ? <Write /> : <Login />}</Route>
        <Route path='/settings'>
          {' '}
          {currentUser ? <Settings /> : <Login />}
        </Route>
      </Routes>
    </Router>
  );
}
