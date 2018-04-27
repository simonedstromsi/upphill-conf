import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const TitleSlide = props => {
  return <h1>{props.title}</h1>
}

class App extends Component {
  state = {
    currentSlide: 0,
    slides: [{
      type: "TitleSlide",
      title: "Daresay at Uphill Conf"
    },
    {
      type: "TitleSlide",
      title: "Another slide"
    }]
  }

  componentDidMount(){
    document.addEventListener("keydown", this.onKeyDown, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.onKeyDown, false);
  }

  onKeyDown = event => {
    if(event.keyCode == 39) {
      this.setState({
        currentSlide: Math.min(this.state.currentSlide + 1, this.state.slides.length - 1)
      })
    } else if(event.keyCode == 37) {
      this.setState({
        currentSlide: Math.max(this.state.currentSlide - 1, 0)
      })
    } 
  }

  render() {
    const slide = this.state.slides[this.state.currentSlide]
    if(slide.type == "TitleSlide") {
      return <TitleSlide {...slide} />
    }
    return null
  }
}

export default App;
