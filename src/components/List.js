import React,{useState, useEffect} from 'react';


const baseurl = "https://image.tmdb.org/t/p/original";

export default function List() {

    const [movies,setMovies] = useState([]);

    useEffect(() => {
        setMovies(JSON.parse(localStorage.getItem('list')));
    }, []);


    function removefunc(movie){
        let movies = []
        if(localStorage.getItem('list')){
            movies = JSON.parse(localStorage.getItem('list'));
        }
        for(let i=0; i<movies.length; i++){
            if(movies[i].id == movie.id){
                movies.splice(i,1);
                setMovies(movies);
                break;
            }
        }
        localStorage.setItem('list',JSON.stringify(movies));
    }

    return (
        <div className="row-component" style={{
            marginTop: "100px",
            textAlign: "center",
            fontSize: "1.5rem"
        }}>
            <h1>My List</h1>
            
            <div  className="row__posters" style={{
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center"
            }}>
                {
                    movies.map(movie => {
                    return  <div className="row__image">
                            <img 
                            key={movie.id}
                            // onClick = {() => clickfunc(movie)}
                            className="row__poster"
                            src={`${baseurl}${movie?.poster_path}`} 
                            alt={movie.name} 
                            width="135px" 
                            />
                            <button onClick = {() => removefunc(movie)} className="row__overlay">Remove</button>
                            
                            </div>;
                    })
                }
            </div>
        </div>
    )
}
