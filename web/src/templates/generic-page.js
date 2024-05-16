import React from "react";
import { graphql } from "gatsby";
import Layout from "../containers/layout";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Podcast from "../components/podcast/podcast";
import SEO from "../components/seo";

import CentralLogo from "../components/central-logo";

export const query = graphql`
  query GenericPageTemplateQuery($id: String!) {
    page: sanityGenericPageType(id: { eq: $id }) {
      id
      title
      slug {
        current
      }
      pageBuilder {
        ... on SanityForm {
          _key
          _type
          label
          heading
          form
        }
        ... on SanityGallery {
          _key
          _type
          images {
            asset {
              gatsbyImageData
            }
          }
        }
        ... on SanityHero {
          _key
          _type
          heading
          tagline
          image {
            asset {
              gatsbyImageData
            }
          }
        }
        ... on SanityTextWithImage {
          _key
          _type
          excerpt
          heading
          released
          tagline
          image {
            asset {
              gatsbyImageData
            }
          }
        }
        ... on SanityVideo {
          _key
          _type
          url
          videoLabel
        }
      }
    }
  }
`;

const FreshPageTemplate = props => {
  const { data, errors } = props;
  const page = data && data.page;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {page && <SEO title={page.title || "Untitled"} />}
      <CentralLogo />
      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {/* {page && <Podcast page={page} />} */}
      <Container>
        <h1>{page.title}</h1>
      </Container>
    </Layout>
  );
};

export default FreshPageTemplate;
