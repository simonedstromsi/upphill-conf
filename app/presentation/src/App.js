import React, { Component } from 'react';
import {Logo, WhiteLogo, Title, Slide, SlideCenter, SlideBottom, SlideCenterVertical, Island, Background, Video} from './Components';
import { Player } from 'video-react';
import './App.css';


class TitleSlide extends Component{
  render() {
    return (
      <SlideCenterVertical>
        <Title>{this.props.title}</Title>
        <Logo/>
      </SlideCenterVertical>
    )
  } 
}

const IslandSlide = props => {
  return (
    <SlideBottom>
      <Background src={props.backgroundSrc}/>
      <Island><h1>{props.title}</h1></Island>
      <WhiteLogo/>
    </SlideBottom>
  )
}

const IslandVideoSlide = props => {
  return (
    <SlideBottom>
      <Video src={props.videoSrc}/>
      <Island><h1>{props.title}</h1></Island>
      <WhiteLogo/>
    </SlideBottom>
  )
}

class App extends Component {
  state = {
    prevSlide: 0,
    currentSlide: 0,
    nextSlide: 1,
    slides: [
      {
        type: "TitleSlide",
        title: "Daresay at Uphill Conf"
      },
      {
        type: "IslandSlide",
        title: "another slide",
        backgroundSrc: "./img/NatGeo02.jpg"
      },
      {
        type: "IslandVideoSlide",
        title: "another video slide",
        videoSrc: "./video/tractor.mp4"
      }
    ]
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown, false);
  }
  
  onKeyDown = event => {
    // Next
    if (event.keyCode === 39) {
      this.setState({
        currentSlide: Math.min(this.state.currentSlide + 1, this.state.slides.length - 1)
      })
    } 
    // Prev
    else if (event.keyCode === 37) {
      this.setState({
        currentSlide: Math.max(this.state.currentSlide - 1, 0)
      })
    }
  }

  getSlide(slide) {
    if (slide.type === "TitleSlide") {
      return <TitleSlide key={slide.type} { ...slide}/>
    } else if (slide.type === "IslandSlide") {
      return <IslandSlide key={slide.type} { ...slide}/>
    } else if (slide.type === "IslandVideoSlide") {
      return <IslandVideoSlide key={slide.type} { ...slide}/>
    }
    return null
  }

  renderSlides = () => {  
    return this.getSlide(this.state.slides[this.state.currentSlide])  
  }
  
  render() {
    return this.renderSlides()
  }
}

export default App;