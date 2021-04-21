import React,{useState, useEffect} from 'react';
import axios from '../Utils/axios';
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
                    return <div className="row__image">
                            <img 
                            key={movie.id}
                            onClick = {() => clickfunc(movie)}
                            className="row__poster"
                            src={`${baseurl}${props.isLarge ? movie?.poster_path : movie?.backdrop_path}`} 
                            alt={movie.name} 
                            width={`${props.isLarge ? "135px" : "225px"}`}
                            />
                            <button  onClick = {() => addfunc(movie)} className="row__overlay">Add to List</button>
                            </div>;
                    })
                }
            </div>
            {YTUrl && < YouTube videoId={YTUrl} opts={opts}  />}
        </div>
    )
}

export default Row;
