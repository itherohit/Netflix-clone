import React,{useState, useEffect} from 'react';
import axios from './axios';
import YouTube from 'react-youtube';
const movieTrailer = require('movie-trailer');

const baseurl = "https://image.tmdb.org/t/p/original";

function Row(props) {
    const [movies,setMovies] = useState([]);
    useEffect(() => {
        async function fetchdata(){
            const request = await axios.get(props.fetchUrl);
            setMovies(request.data.results);
        }
        fetchdata();
    }, [props.fetchUrl]);

    const [YTUrl,setUrl] = useState("");

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

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        }       
    };

    return (
        <div className="row-component">
            <h1>{props.title}</h1>
            
            <div className="row__posters">
                {
                    movies.map(movie => {
                    return <img 
                            key={movie.id}
                            onClick = {() => clickfunc(movie)}
                            className="row__poster"
                            src={`${baseurl}${props.isLarge ? movie?.poster_path : movie?.backdrop_path}`} 
                            alt={movie.name} 
                            width={`${props.isLarge ? "135px" : "225px"}`}
                            />;
                    })
                }
            </div>
            {YTUrl && < YouTube videoId={YTUrl} opts={opts}  />}
        </div>
    )
}

export default Row;
