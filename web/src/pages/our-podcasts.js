import React, {useEffect} from "react";
import _ from 'lodash';
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import { colors } from "../styles/colors";
import styled from "styled-components";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs, filterOutNonFeaturedDocs } from "../lib/helpers";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import CentralLogo from "../components/central-logo"
import PodcastGrid from "../components/our-podcasts/podcast-preview-grid";
import FeaturedPodcastGrid from "../components/our-podcasts/featured-podcast-preview-grid";

export const query = graphql`
  query OurPodcastsPageQuery {
    podcasts: allSanityPodcast(
      sort: {publishedAt: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
    ) {
      edges {
        node {
          id
          mainImage {
            asset {
              _id
              gatsbyImageData(
                layout: FULL_WIDTH, 
                fit: FILLMAX,
                placeholder: BLURRED,
                formats: AUTO
                )
            }
            alt
          }
          title
          isFeaturedPodcast
          previewImage {
            alt
            asset {
              _id
              gatsbyImageData(
                fit: FILLMAX
                placeholder: BLURRED
                formats: AUTO
              )
            }
          }
          _rawExcerpt
          slug {
            current
          }
          podcastLink
          spotifyLink
          amazonLink
          iHeartRadioLink
        }
      }
    }
  }
`;

const OurPodcastsWrapper = styled.div` 
    padding: 120px 2rem 2rem;
    position: relative;
    .read-more-link {
      flex: 1;
      text-decoration: none;
      font-weight: bold;
      color: ${colors.FAGrey};
      display: flex;
      gap: 6px;
      &:hover {
          text-decoration: underline;
      }
        &:visited {
        color: ${colors.FAGrey};
      }
    }
    .css-6bxxch-MuiPaper-root-MuiAccordion-root.Mui-expanded {
      margin: 0  !important;
    }
`

const OurPodcasts = (props) => {
  const { data, errors } = props;
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  // useEffect(() => {
  //   window.scrollTo(0,0)
  // }, [data])

  const allPodcastNodes = data && data.podcasts && mapEdgesToNodes(data.podcasts).filter(filterOutDocsWithoutSlugs);
  const featuredPodcastNodes = allPodcastNodes.filter(filterOutNonFeaturedDocs)
  const podcastNodes = _.reject(allPodcastNodes, filterOutNonFeaturedDocs)
  
  return (
    <Layout>
      <SEO title="Our Podcasts" />
      <CentralLogo />
      <OurPodcastsWrapper className="our-podcasts-wrapper">
        {featuredPodcastNodes && featuredPodcastNodes.length > 0 && <FeaturedPodcastGrid nodes={featuredPodcastNodes} />}
        {podcastNodes && podcastNodes.length > 0 && <PodcastGrid nodes={podcastNodes} />}
      </OurPodcastsWrapper>
    </Layout>
  )
}

export default OurPodcasts
