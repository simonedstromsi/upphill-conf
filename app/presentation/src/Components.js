import styled from 'styled-components';
import React, { Component } from 'react';

const LogoText = styled.div`
    position: absolute;
    left: 30pt;
    bottom: 30pt;
    font-family: 'Space Mono', monospace;
    font-weight: 500;
    font-size: 15pt;
    text-transform: uppercase;
`

export const Background = (props) => {
    const ImgFullSize = styled.div`
        position: absolute;
        z-index: -1;
        width:100%;
        height:100%;
        background-position: center;
        background-image: url(${props.src});
    `
    return <ImgFullSize/>
}


export const Logo = () => {
    return <LogoText>daresay</LogoText>
}

export const WhiteLogo = () => {
    return <LogoText style={{color: "white"}}>daresay</LogoText>
}

export const Title = styled.h1`
font-family: 'Space Mono', monospace;
font-weight: 500;
font-size: 120pt;
margin-left: 30pt;
margin-right: 30pt;
text-transform: uppercase;
`

export const Slide = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
`;

export const SlideCenter = Slide.extend`
align-items: center;
justify-content: center;
`

export const SlideBottom = Slide.extend`
align-items: center;
justify-content: flex-end;
`

export const SlideCenterVertical = Slide.extend`
align-items: left;
justify-content: center;
`

export const Island = styled.div`
margin: 80pt 20pt 80pt 20pt;
padding: 20pt;
min-width: 40%;
min-height: 30%;
background-color: white;
display: flex; 
align-items: center;
justify-content: center;
text-transform: uppercase;
`

export const Video = (props) => {
    const VideoFullScreen = styled.video`
        z-index: -1;
        position: fixed;
        top: 50%; left: 50%;
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        transform: translate(-50%, -50%);
    `
    return <VideoFullScreen autoPlay loop muted>
        {<source src={props.src} type="video/mp4"/>}
    </VideoFullScreen>
}