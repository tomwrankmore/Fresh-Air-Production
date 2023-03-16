import React from "react";
import {colors} from "../../styles/colors"
import styled from "styled-components";
import { FaSpotify, FaPodcast } from 'react-icons/fa';
import { SiIheartradio } from "react-icons/si";
import { BsGoogle } from "react-icons/bs"

const IconContainer = styled.div` 
  padding: 0 2rem 2rem 2rem;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    a {
      display: block;
      color: ${colors.FAGrey};
      &:hover {
        color: ${colors.FAGrey};
        transform: translateY(-2px) scale(1.2);
        transition: transform 0.25s;
      }
      svg {
        font-size: 1.875rem;
      }
    } 
  }
`

const PodcastIconsSection = React.forwardRef(({tl, podcast}, ref) => {
  return (
    <IconContainer>
      <ul>
        {podcast.podcastLink && (<li><a href={podcast.podcastLink} target="_blank" rel="noreferrer"><FaPodcast/></a></li>)}
        {podcast.spotifyLink && (<li><a href={podcast.spotifyLink} target="_blank" rel="noreferrer"><FaSpotify/></a></li>)}
        {podcast.amazonLink && (<li><a href={podcast.amazonLink} target="_blank" rel="noreferrer"><BsGoogle/></a></li>)}
        {podcast.iHeartRadioLink && (<li><a href={podcast.iHeartRadioLink} target="_blank" rel="noreferrer"><SiIheartradio/></a></li>)}
      </ul>
    </IconContainer>
  )
}
)

export default PodcastIconsSection