import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';
import {db,auth} from './firebase';

function Signup() {
    let history = useHistory();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState(false);

    useEffect(()=>{
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(name.length>2 && pass.length>3 && re.test(email)){
            setError(true);
        }else{
            setError(false);
        }
    },[name,email,pass]);

    function handleClick() {
        history.push("/signin");
    }

    function signup(e) {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, pass)
            .then(user => {
                setName('');
                setEmail('');
                setPass('');
                db.collection("users").doc(user.user.uid).set({
                    name: name,
                    email: email
                });
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <div className="home">
                <div className="signin">
                    <form className="signin__form">     
                        <h1>Sign Up</h1>
                        <TextField required value={name} onChange={(e) => {setName(e.target.value)}} className="signin__input" id="filled-asic" label="Name" variant="filled" color="secondary"/>
                        <TextField required value={email} onChange={(e) => {setEmail(e.target.value)}} className="signin__input" id="filled-bsic" label="Email" variant="filled" color="secondary"/>
                        <TextField required value={pass} type="password" onChange={(e) => {setPass(e.target.value)}} className="signin__input" id="filled-bic" label="Password" variant="filled" color="secondary"/>
                        <Button disabled={!error} type="submt" id="signinbtn" variant="contained" color="secondary"  label="Filled" onClick={e=> signup(e)}>
                        Sign Up
                        </Button>
                        <div className="signin__form__member">
                            <p>Already a Member?</p>
                            <span className="signup__click" onClick={handleClick}>Sign In Now</span>
                        </div>
                    </form>
                    </div>
            </div>
        </div>
    )
}

export default Signup