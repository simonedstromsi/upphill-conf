import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

class TitleSlide extends Component{
  render() {
    return (
      <FullSize>
        <h1 className='title'>{this.props.title}</h1>
        <p className='logo'>DARESAY</p>
        </FullSize>
    )
  }
}

const FullSize = styled.div`
  width: 100%;
  height: 100vh;
  display: flex; 
  background-color: grey;
  `;

const FullSizeCenterContent = FullSize.extend`
  align-items: center;
  justify-content: center;
`

const Island = styled.div`
  padding: 20pt;
  min-width: 40%;
  min-height: 30%;
  background-color: white;
  display: flex; 
  align-items: center;
  justify-content: center;
`

const CeneterContent = {
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center'
}

const IslandSlide = props => {
  return <FullSizeCenterContent>
      <Island>
        <h1>
          {props.title}
        </h1>
      </Island>
    </FullSizeCenterContent>
}

class App extends Component {
  state = {
    currentSlide: 1,
    slides: [
      {
        type: "TitleSlide",
        title: "Daresay at Uphill Conf"
      },
      {
        type: "IslandSlide",
        title: "ANOTHER SLIDE"
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
    if (event.keyCode == 39) {
      this.setState({
        currentSlide: Math.min(this.state.currentSlide + 1, this.state.slides.length - 1)
      })
    } else if (event.keyCode == 37) {
      this.setState({
        currentSlide: Math.max(this.state.currentSlide - 1, 0)
      })
    }
  }
  
  render() {
    const slide = this.state.slides[this.state.currentSlide]
    if (slide.type == "TitleSlide") {
      return <TitleSlide { ...slide}/>
    } else if (slide.type == "IslandSlide") {
      return <IslandSlide { ...slide}/>
    }
    return null
  }
}

export default App;