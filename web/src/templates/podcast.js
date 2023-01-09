import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Podcast from "../components/podcast/podcast";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query PodcastTemplateQuery($id: String!) {
    podcast: sanityPodcast(id: { eq: $id }) {
      id
      publishedAt
      relatedProjects {
        title
        _id
        slug {
          current
        }
      }
      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
      heroImage {
        alt
        asset {
          gatsbyImageData
        }
      }
      title
      subTitle
      slug {
        current
      }
      podcastLink
      spotifyLink
      amazonLink
      iHeartRadioLink
      _rawBody
      _rawQuote
    }
  }
`;

const PodcastTemplate = props => {
  const { data, errors } = props;
  const podcast = data && data.podcast;
  console.log('PodcastTemplate podcast', podcast)
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {podcast && <SEO title={podcast.title || "Untitled"} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {podcast && <Podcast podcast={podcast} />}
    </Layout>
  );
};

export default PodcastTemplate;