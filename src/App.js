import React, {useEffect} from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Signin from './Signin';
import Signup from './Signup';
import Browse from './Browser';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import {auth} from './firebase';
import { useDispatch } from "react-redux";
import {login,logout} from './features/userSlice';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    auth.onAuthStateChanged(userauth =>{
      if(userauth){
        dispatch(login({
          email: userauth.email,
          uid: userauth.uid,
          displayname: userauth.displayname
        }));
      }else{
        dispatch(logout());
      }
    })
  },[]);
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={!user ? Home : Browse}/>
          {!user && <Route exact path="/signin" component={Signin}/> }
          {!user && <Route exact path="/signup" component={Signup}/> }
          <Route path="/" component={!user ? Home : Browse} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
