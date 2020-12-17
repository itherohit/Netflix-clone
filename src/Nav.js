import React, { useState, useEffect } from 'react'

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
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
            width="100px"
            alt="Netflix"
            />
        </div>
    )
}

export default Nav
