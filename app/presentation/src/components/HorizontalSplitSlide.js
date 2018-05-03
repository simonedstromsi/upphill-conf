
import React, { Component } from 'react';
import styled from 'styled-components';
import { WhiteLogo } from '../StyledComponents';

const HorizontalSplitViewContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
`

const SplitViewRow = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`

const ImageLeft = styled.img`
background-position: center;
width: 100%;
height: 100vh;
`

const TextRight = styled.h1`
font-family: 'Space Mono', monospace;
font-weight: 500;
font-size: 20pt;
text-transform: uppercase;
text-align: left;
padding: 20pt;
`

export class HorizontalSplitSlide extends Component {
    render() {
        return (
            <HorizontalSplitViewContainer>
                <SplitViewRow className="row">
                    <ImageLeft src={this.props.image} />
                    <WhiteLogo />
                </SplitViewRow>

                <SplitViewRow className="row">
                    <TextRight>{this.props.text}</TextRight>
                </SplitViewRow>
            </HorizontalSplitViewContainer>
        )
    }

}