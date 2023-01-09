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
      mainImage {
        asset {
          _id
          gatsbyImageData
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
      quote
      relatedProjects {
        title
        _id
        slug {
          current
        }
        _rawExcerpt
        previewImage {
          alt
          asset {
            gatsbyImageData
          }
        }
        podcastLink
        spotifyLink
        amazonLink
        iHeartRadioLink
      }
    }
  }
`;

const PodcastTemplate = props => {
  const { data, errors } = props;
  const podcast = data && data.podcast;
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