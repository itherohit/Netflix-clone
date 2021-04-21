import React,{useState} from 'react';
import Homecard from './Homecard';
import QuestionCard from "./QuestionCard";
import {Link} from 'react-router-dom'

const questions = require("../question.json");

function Home() {
    const [email,setEmail] = useState("");

    function inputemail(e){
        setEmail(e.target.value);
    }
    return (
        <div>
            
            <div className="home">
                <div className="banner--fadeup"></div>
                <div className="home__content">
                    <h1>Unlimited movies, TV<br /> shows and more.</h1>
                    <p>Watch anywhere. Cancel anytime.</p>
                    <div className="getStarted">
                        <p>Ready to watch? Enter your email to create or restart your membership.</p>
                        <div className="getStarted_input">
                            <input type="email" onChange={e=>{inputemail(e)}} id="email" className="getStarted__email" placeholder="Email Address"/>
                            <Link to={`/signup?emailId=${email}`} className="getStarted__button">
                                <span>{"GET STARTED >"}</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="banner--fadebottom"></div>
            </div>
            <Homecard 
                header="Enjoy on your TV." 
                info="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
                imageUrl="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                videoUrl="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
            />
            <Homecard 
                header="Download your shows to watch offline." 
                info="Save your favourites easily and always have something to watch."
                imageUrl="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            />
            <Homecard 
                header="Watch everywhere." 
                info="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
                imageUrl="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
                videoUrl="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                bottomCard
            />
            <div className="Questions">
                <h1>Frequently Asked Questions</h1>
                {questions.map(question => {
                    return <QuestionCard key={question.id} q={question.q} ans={question.ans}/>
                })}
            </div>
            <div className="home__footer">
                <div className="home__content">
                    <div className="getStarted">
                        <p>Ready to watch? Enter your email to create or restart your membership.</p>
                        <div className="getStarted_input">
                            <input type="email" id="email" onChange={e=>{inputemail(e)}} className="getStarted__email" placeholder="Email Address"/>
                            <Link to={`/signup?emailId=${email}`} className="getStarted__button">
                                <span>{"GET STARTED >"}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Home
