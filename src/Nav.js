import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
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
            <Link to="/">
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
                width="100px"
                alt="Netflix"
                className="navbar__img"
                />
            </Link>
            <Link to="/signin" style={{ textDecoration: 'none' }}>
                <button className="navbar__btn">Sign In</button>
            </Link>
        </div>
    )
}

export default Nav
