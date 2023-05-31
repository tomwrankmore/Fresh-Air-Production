import React from "react";
import styled from "styled-components";

const EditorialEpisodesSectionWrapper = styled.div` 
  padding: 2rem;
`

const EditorialOmnySection = React.forwardRef(({editorial}, ref) => {
  return (
    <EditorialEpisodesSectionWrapper>
      <iframe src={`https://omny.fm/shows/${editorial.omnyWidget}/playlists/podcast/embed?style=artwork`} allow="autoplay; clipboard-write" width="100%" height="500" frameBorder="0" title={editorial.title}></iframe>
    </EditorialEpisodesSectionWrapper>
  )
}
)

export default EditorialOmnySection