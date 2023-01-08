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

const PodcastEpisodesSection = React.forwardRef(({tl}, ref) => {
  return (
    <PodcastEpisodesSectionWrapper>
      <EpisodeList>
        <li>
          <span className="episode-title">NATIONAL MEMORIAL ARBORETUM: A NEW HOPE</span>
          <span className="release-date">RELEASE DATE</span>
          <ul className="icon-list">
              <li><FaPodcast/></li>
              <li><FaSpotify/></li>
              {/* <li><FaAmazon/></li> */}
              <li><SiIheartradio/></li>
          </ul>
        </li>
        <li>
          <span className="episode-title">NATIONAL MEMORIAL ARBORETUM: A NEW HOPE</span>
          <span className="release-date">RELEASE DATE</span>
          <ul className="icon-list">
              <li><FaPodcast/></li>
              <li><FaSpotify/></li>
              {/* <li><FaAmazon/></li> */}
              <li><SiIheartradio/></li>
          </ul>
        </li>
        <li>
          <span className="episode-title">NATIONAL MEMORIAL ARBORETUM: A NEW HOPE</span>
          <span className="release-date">RELEASE DATE</span>
          <ul className="icon-list">
              <li><FaPodcast/></li>
              <li><FaSpotify/></li>
              {/* <li><FaAmazon/></li> */}
              <li><SiIheartradio/></li>
          </ul>
        </li>
        <li>
          <span className="episode-title">NATIONAL MEMORIAL ARBORETUM: A NEW HOPE</span>
          <span className="release-date">RELEASE DATE</span>
          <ul className="icon-list">
              <li><FaPodcast/></li>
              <li><FaSpotify/></li>
              {/* <li><FaAmazon/></li> */}
              <li><SiIheartradio/></li>
          </ul>
        </li>
        <li>
          <span className="episode-title">NATIONAL MEMORIAL ARBORETUM: A NEW HOPE</span>
          <span className="release-date">RELEASE DATE</span>
          <ul className="icon-list">
              <li><FaPodcast/></li>
              <li><FaSpotify/></li>
              {/* <li><FaAmazon/></li> */}
              <li><SiIheartradio/></li>
          </ul>
        </li>
        <li>
          <span className="episode-title">NATIONAL MEMORIAL ARBORETUM: A NEW HOPE</span>
          <span className="release-date">RELEASE DATE</span>
          <ul className="icon-list">
              <li><FaPodcast/></li>
              <li><FaSpotify/></li>
              {/* <li><FaAmazon/></li> */}
              <li><SiIheartradio/></li>
          </ul>
        </li>
      </EpisodeList>
    </PodcastEpisodesSectionWrapper>
  )
}
)

export default PodcastEpisodesSection