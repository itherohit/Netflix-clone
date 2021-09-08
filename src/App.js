import React, {useEffect} from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Movies from './components/Movies';
import Tvseries from './components/Tvseries';
import List from './components/List';
import Browse from './components/Browser';
import Footer from './components/Footer';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import {auth} from './Utils/firebase';
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
            {user && <Route path="/movies" component={Movies}/> }
            {user && <Route path="/tvseries" component={Tvseries}/> }
            {user && <Route path="/list" component={List}/> }
            <Route path="*">
              <Redirect to="/"/>
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
