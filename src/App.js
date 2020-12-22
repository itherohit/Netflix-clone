import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Signin from './Signin';
import Signup from './Signup';
import Browser from './Browser';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  const user = useSelector(selectUser);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route path="/browse">
          <Browser />
        </Route>
      </div>
    </Router>
  );
}

export default App;
