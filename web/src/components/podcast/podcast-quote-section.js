import React from "react";
import {colors} from "../../styles/colors"
import {device} from "../../styles/mediaQueries"
import styled from "styled-components";
import SoundwaveGraphic from '../../assets/testimonials-bg.inline.svg'

const QuoteWrapper = styled.div`
    width: 100%;
    background: ${colors.FAGrey};
    position: relative;
    height: 100%;
    overflow: hidden;
    height: 275px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;

    .soundwaveGraphic {
        position: absolute;
        width: 200%;
        height: 100%;
    }
    h1 {
        color: white;
        display: block;
        z-index: 101;
        text-align: center;
        font-size: clamp(1.875rem, 6vw, 3rem); 
        width: 100%;
        line-height: auto;
        @media ${device.mediaMinMedium} {
            max-width: 75%;
        }
    }
`

const PodcastQuoteSection = React.forwardRef(({podcast}, ref) => {
    return (
        <QuoteWrapper ref={ref}>
              <SoundwaveGraphic className='soundwaveGraphic' /> 
            <h1>{podcast.quote}</h1>
        </QuoteWrapper>
    )
})

export default PodcastQuoteSection