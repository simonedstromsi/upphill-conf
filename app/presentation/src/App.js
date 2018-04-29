import React, { Component } from 'react';
import {Logo, WhiteLogo, Title, Slide, SlideCenter, SlideBottom, SlideCenterVertical, Island, Background} from './Components';

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

class App extends Component {
  state = {
    currentSlide: 0,
    slides: [
      {
        type: "TitleSlide",
        title: "Daresay at Uphill Conf"
      },
      {
        type: "IslandSlide",
        title: "another slide",
        backgroundSrc: "./img/NatGeo02.jpg"
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
    if (event.keyCode === 39) {
      this.setState({
        currentSlide: Math.min(this.state.currentSlide + 1, this.state.slides.length - 1)
      })
    } else if (event.keyCode === 37) {
      this.setState({
        currentSlide: Math.max(this.state.currentSlide - 1, 0)
      })
    }
  }

  renderSlide = () => {
    const slide = this.state.slides[this.state.currentSlide]
    if (slide.type === "TitleSlide") {
      return <TitleSlide { ...slide}/>
    } else if (slide.type === "IslandSlide") {
      return <IslandSlide { ...slide}/>
    }
    return null
  }
  
  render() {
    return this.renderSlide()
  }
}

export default App;