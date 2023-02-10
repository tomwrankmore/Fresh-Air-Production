import React, {useLayoutEffect, useRef} from "react";
import {colors} from "../../styles/colors"
import {device} from "../../styles/mediaQueries"
import styled from "styled-components";
import { FaSpotify, FaPodcast, FaAmazon } from 'react-icons/fa';
import { SiIheartradio } from "react-icons/si";

const PodcastEpisodesSectionWrapper = styled.div` 
  padding: 2rem;
`

const EpisodeList = styled.ul` 
  text-transform: uppercase;
  li {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    span.episode-title {
      flex: 1;
    }

    span.release-date {
      margin: 0 1rem;
      font-size: 0.875rem;
      @media ${device.mediaMinMedium} {
        margin: 0 2rem;
      }
    }

    ul.icon-list {
      display: flex;
      gap: 0.5rem;
    }
  }
`

const PodcastEpisodesSection = React.forwardRef(({podcast}, ref) => {
  return (
    <PodcastEpisodesSectionWrapper>
      
      <iframe src={`https://omny.fm/shows/${podcast.omnyWidget}/playlists/podcast/embed?style=artwork`} allow="autoplay; clipboard-write" width="100%" height="500" frameborder="0" title={podcast.title}></iframe>
      
    </PodcastEpisodesSectionWrapper>
  )
}
)

export default PodcastEpisodesSection