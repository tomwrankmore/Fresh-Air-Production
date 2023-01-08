import React, {useLayoutEffect, useRef} from "react";
import {colors} from "../../styles/colors"
import {device} from "../../styles/mediaQueries"
import styled from "styled-components";
import { FaSpotify, FaPodcast, FaAmazon } from 'react-icons/fa';
import { SiIheartradio } from "react-icons/si";

const IconContainer = styled.div` 
  padding: 2rem;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`

const PodcastIconsSection = React.forwardRef(({tl}, ref) => {
  return (
    <IconContainer>
      <ul>
          <li><FaPodcast/></li>
          <li><FaSpotify/></li>
          <li><FaAmazon/></li>
          <li><SiIheartradio/></li>
      </ul>
    </IconContainer>
  )
}
)

export default PodcastIconsSection