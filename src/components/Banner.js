import React,{useState, useEffect} from 'react'
import axios from '../Utils/axios';
import requests from '../Utils/request.js';
import YouTube from 'react-youtube';
const movieTrailer = require('movie-trailer');

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


    const [YTUrl,setUrl] = useState("");
    const [added,setAdd] = useState(false);

    function clickfunc(movie){
        console.log(movie);
        console.log(movie.original_name || movie.name || movie.title || movie.original_title || '');
        if(YTUrl){
            setUrl("");
        }else{
            movieTrailer(movie?.original_name || movie?.name || movie.title || movie.original_title || '')
                .then(url => {
                    const vid = new URLSearchParams(new URL(url).search);
                    setUrl(vid.get('v'));
                })
                .catch(error=>console.log(error));
        }
    }

    function addfunc(movie){
        let movies = []
        if(localStorage.getItem('list')){
            movies = JSON.parse(localStorage.getItem('list'));
        }
        let flag = 0;
        for(let i=0; i<movies.length; i++){
            if(movies[i].id == movie.id){
                flag=1;
                break;
            }
        }
        if(!flag){
            movies.push(movie);   
        }
        localStorage.setItem('list',JSON.stringify(movies));
        setAdd(true);
    }

    const opts = {
        height: '490',
        width: '100%',
        playerVars: {
          autoplay: 1,
        }       
    };

    return (
        <div>
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
                    <button onClick={() => clickfunc(movie)}>Play</button>
                    <button onClick={() => addfunc(movie)} style={{
                        cursor: "pointer"
                    }}>{added ? "Added":"Add to List"}</button>
                </div>
                <p className="banner__description">{truncate(movie?.overview,150)}
                </p>
            </div>
            <div className="banner--fadebottom"></div>
        </div>
        {YTUrl && < YouTube videoId={YTUrl} opts={opts}  />}
        </div>
    )
}

export default Banner;