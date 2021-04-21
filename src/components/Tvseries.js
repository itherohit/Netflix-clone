import Row from './Row.js';
import Banner from "./Banner";
import request from '../Utils/request.js';
import React from 'react'

function Tvseries() {
    return (
        <div>
            <Banner />
            <Row title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals} isLarge/>
            <Row title="Trending Now" fetchUrl={request.fetchTrending} isLarge/>
            <Row title="Top Rated" fetchUrl={request.fetchTopRated} isLarge/>
            <Row title="Comedy Series" fetchUrl={request.fetchComedySeries} isLarge/>
            <Row title="Animated Series" fetchUrl={request.fetchAnimateSeries} isLarge/>
            <Row title="Crime Series" fetchUrl={request.fetchCrimeSeries} isLarge/>
            <Row title="Documentary" fetchUrl={request.fetchDocSeries} isLarge/>
        </div>
    )
}

export default Tvseries
