import Row from './Row.js';
import Banner from "./Banner";
import request from './request.js';
import React from 'react'

function Browser() {
    return (
        <div>
            <Banner />
            <Row title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals} isLarge/>
            <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
            <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
            <Row title="Action Movies" fetchUrl={request.fetchActianMovies}/>
            <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
            <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
            <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies}/>
            <Row title="Documentaries" fetchUrl={request.fetchDocumentaries}/>
        </div>
    )
}

export default Browser
