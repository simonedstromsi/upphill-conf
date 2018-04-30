import React, { Component } from 'react';
import { Logo, WhiteLogo, Title, Slide, SlideCenter, SlideBottom, SlideCenterVertical, Island, Background, Video } from './Components';
import { Slides } from './Slides'

import './App.css';

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

  render() {
    const slide = this.state.slides[this.state.currentSlide]
    return Slides.getSlide(slide.type, slide)
  }
}

export default App;