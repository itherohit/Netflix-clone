import React,{useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import {db,auth} from './firebase';
import {login} from './features/userSlice';
import { useDispatch } from "react-redux";

function Signin() {
    let history = useHistory();
    const [email,setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState(false);
    const dispatch = useDispatch();


    useEffect(()=>{
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(pass.length>3 && re.test(email)){
            setError(true);
        }else{
            setError(false);
        }
    },[email,pass]);

    function handleClick() {
        history.push("/signup");
    }

    function signin(e) {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, pass)
            .then((user) => {
                setEmail('');
                setPass('');
                dispatch(login({
                    email: user.user.email,
                    uid: user.user.uid,
                    displayname: user.displayname
                }))
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    return (
        <div>
            <div className="home">
                <div className="signin">
                    <form className="signin__form">
                        <h1>Sign In</h1>
                        <TextField required value={email} onChange={(e) => {setEmail(e.target.value)}} className="signin__input" id="filled-basic" label="Email" variant="filled" color="secondary"/>
                        <TextField required type="password" value={pass} onChange={(e) => {setPass(e.target.value)}} className="signin__input" id="filled-basic" label="Password" variant="filled" color="secondary"/>
                        <Button disabled={!error} type="submit" id="signinbtn" variant="contained" color="secondary"  label="Filled" onClick={e=> signin(e)}>
                        Sign In
                        </Button>
                        <div className="signin__form__member">
                            <p>New Member?</p>
                            <span className="signup__click" onClick={handleClick}>Sign Up Now</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin
