import React from 'react';
import HomeVideo from "../assets/video/new-cutting-video.mp4";
import { H1 } from '../styles/FrontHeader';
import { Wrapper } from '../styles/Wrappers';


export const StartBackground = () => {

    return (
        <>
            <Wrapper>
                <H1>REACTAURANGEN</H1>
                <video autoPlay loop muted playsInline height="100%" width="100%" preload="auto" >
                    <source src={HomeVideo} type="video/mp4"/>
                    <source src={HomeVideo} type="video/webm"/>
                    Your browser does not support HTML5 videos
                </video>
            </Wrapper>
        </>
    )
}



