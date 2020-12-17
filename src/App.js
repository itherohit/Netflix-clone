import React from 'react';
import './App.css';
import Row from './Row.js';
import request from './request.js';
import Banner from "./Banner";
import Nav from './Nav';
import Home from './Home';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/browse">
          <Banner />
          <Row title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals} isLarge/>
          <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
          <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
          <Row title="Action Movies" fetchUrl={request.fetchActianMovies}/>
          <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
          <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
          <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies}/>
          <Row title="Documentaries" fetchUrl={request.fetchDocumentaries}/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
