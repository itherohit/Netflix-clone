import React,{useState,useEffect} from 'react'

function AddtoList({ movie }) {
    const [addlist,setaddlist] = useState("Add to list");

    useEffect(()=>{
        let movies = []
        if(localStorage.getItem('list'))
            movies = JSON.parse(localStorage.getItem('list'));
        for(let i=0; i<movies.length; i++){
            if(movies[i].id == movie.id)
                setaddlist("Added");
        }
    },[]);
    
    function addfunc(movie){
        let movies = []
        if(localStorage.getItem('list'))
            movies = JSON.parse(localStorage.getItem('list'));
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
        setaddlist("Added");
        localStorage.setItem('list',JSON.stringify(movies));
    }

    return (
            <button  onClick = {() => addfunc(movie)} className="row__overlay">{addlist}</button>
    )
}

export default AddtoList
