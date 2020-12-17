import React,{useState, useEffect} from 'react'
import axios from './axios';
import requests from './request.js';

const baseurl = "https://image.tmdb.org/t/p/original";

function Banner() {
    const [movie,setMovies] = useState([]);
    useEffect(() => {
        async function fetchdata(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(request.data.results[Math.floor(Math.random()*request.data.results.length-1)]);
        }
        fetchdata();
    }, []);

    function truncate(str,n){
        return str?.length>n ? str.substr(0,n-1)+"..." : str;
    }
    return (
        <div className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(${baseurl}${movie?.backdrop_path})`,
            backgroundPosition: "center center"
        }}>
            <div className="banner__content">
                <h1 className="banner__header">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button>Play</button>
                    <button>My List</button>
                </div>
                <p className="banner__description">{truncate(movie?.overview,150)}
                </p>
            </div>
            <div className="banner--fadebottom"></div>
        </div>
    )
}

export default Banner;
