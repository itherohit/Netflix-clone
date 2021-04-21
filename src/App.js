import React, {useEffect} from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Signin from './Signin';
import Signup from './Signup';
import Browse from './Browser';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import {auth} from './firebase';
import { useDispatch } from "react-redux";
import {login,logout} from './features/userSlice';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#e50914'
    }
  }
});

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
    <MuiThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={!user ? Home : Browse}/>
            {!user && <Route path="/signin" component={Signin}/> }
            {!user && <Route path="/signup" component={Signup}/> }
            <Route path="*">
              <Redirect to="/"/>
            </Route>
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
