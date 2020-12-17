import React from 'react'

function Homecard(props) {
    return (
        <div className="HomeCard">
            <div className="HomeCard__content">
                <div className="HomeCard__content__info">
                    <h1>{props.header}</h1>
                    <p>{props.info}</p>
                </div>
                <div className="HomeCard__content__image">
                    <img 
                    src={props.imageUrl}
                    alt="ImageUrl"
                    />
                    {props.videoUrl && 
                    <div className={`HomeCard__content__video ${props.bottomCard && "HomeCard__content__video__btm"}`}>
                        <video class="our-story-card-video" autoPlay loop muted>
                            <source src={props.videoUrl} type="video/mp4" />
                        </video>
                    </div> }
                </div>
            </div>
            
        </div>
    )
}

export default Homecard
