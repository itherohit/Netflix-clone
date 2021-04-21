import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { useDispatch } from "react-redux";
import {logout} from './features/userSlice'
import {auth} from './firebase';

function Nav() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const [scroll,setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", ()=>{
            if (window.scrollY > 100) {
                setScroll(true);
            }
            else{
                setScroll(false);	
            }
        });
    }, [])

    return (
        <div className={`navbar ${scroll && "nav--bg"}`}>
            <div className="navlinks">
                <Link to="/">
                    <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
                    width="100px"
                    alt="Netflix"
                    className="navbar__img"
                    />
                </Link>
                {user && <Link to="/movies" className="navlinks__items">Movies</Link> }
                {user && <Link to="/tvseries" className="navlinks__items">Tv Series</Link> }
                {user && <Link to="/list" className="navlinks__items">My List</Link> }
            </div>
            {!user ? <Link to="/signin" style={{ textDecoration: 'none' }}>
                        <button className="navbar__btn">Sign In</button>
                    </Link> :
            <Link to="/signin" style={{ textDecoration: 'none' }} onClick={() => {
                dispatch(logout());
                auth.signOut();
            }}>
                <button className="navbar__btn">Sign Out</button>
            </Link>}
        </div>
    )
}

export default Nav
