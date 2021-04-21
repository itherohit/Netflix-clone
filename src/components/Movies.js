import Row from './Row.js';
import Banner from "./Banner";
import request from '../Utils/request.js';
import React from 'react'

function Movies() {
    return (
        <div>
            <Banner />
            <Row title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals} isLarge/>
            <Row title="Action Movies" fetchUrl={request.fetchActianMovies}/>
            <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
            <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
            <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies}/>
            <Row title="Animated Movies" fetchUrl={request.fetchAnimateMovies}/>
            <Row title="Crime Movies" fetchUrl={request.fetchCrimeMovies}/>
            <Row title="History Movies" fetchUrl={request.fetchHistoryMovies}/>
            <Row title="Syfy Movies" fetchUrl={request.fetchScienceMovies}/>
            <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies}/>
            <Row title="War Movies" fetchUrl={request.fetchWarMovies}/>
            <Row title="Documentaries" fetchUrl={request.fetchDocumentaries}/>
        </div>
    )
}

export default Movies
