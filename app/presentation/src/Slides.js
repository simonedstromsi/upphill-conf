
import React, { Component } from 'react';
import { Logo, WhiteLogo, Title, Slide, SlideCenter, SlideBottom, SlideCenterVertical, Island, Background, Video } from './StyledComponents';
import { Player } from 'video-react';
import { HorizontalSplitSlide } from './components/HorizontalSplitSlide'

class TitleSlide extends Component {
    render() {
        return (
            <SlideCenterVertical>
                <Title>{this.props.title}</Title>
                <Logo />
            </SlideCenterVertical>
        )
    }
}

const IslandSlide = props => {
    return (
        <SlideBottom>
            <Background src={props.backgroundSrc} />
            <Island><h1>{props.title}</h1></Island>
            <WhiteLogo />
        </SlideBottom>
    )
}

const IslandVideoSlide = props => {
    return (
        <SlideBottom>
            <Video src={props.videoSrc} />
            <Island><h1>{props.title}</h1></Island>
            <WhiteLogo />
        </SlideBottom>
    )
}

export const Slides = {
    getSlide(type, props) {
        switch (type) {
            case "TitleSlide":
                return <TitleSlide key={type} {...props} />
            case "IslandSlide":
                return <IslandSlide key={type} {...props} />
            case "IslandVideoSlide":
                return <IslandVideoSlide key={type} {...props} />
            case "HorizontalSplitSlide":
                return <HorizontalSplitSlide key={type} {...props} />
            default:
                return null
        }
    }
}
