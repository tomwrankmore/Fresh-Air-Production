import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Editorial from "../components/editorial/editorial";
import SEO from "../components/seo";
import Layout from "../containers/layout";


export const query = graphql`
  query EditorialTemplateQuery($id: String!) {
    editorial: sanityEditorial(id: { eq: $id }) {
      id
      publishedAt
      id
    _rawBody
    mainImage {
      alt
      asset {
        gatsbyImageData
      }
    }
    slug {
      current
    }
    relatedProjects {
      _id
      slug {
        current
      }
      previewImage {
        asset {
          gatsbyImageData
        }
      }
      sectionOneImage {
        asset {
          gatsbyImageData
        }
        alt
      }
      sectionTwoImage {
        alt
        asset {
          gatsbyImageData
        }
      }
    }
    _rawSectionOneText
    _rawSectionTwoText
    isFeaturedPost
    heroImage {
      asset {
        gatsbyImageData
      }
    }
    }
  }
`;

const EditorialTemplate = props => {
  const { data, errors } = props;
  const editorial = data && data.sanityEditorial;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {editorial && <SEO title={editorial.title || "Untitled"} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {editorial && <Editorial editorial={editorial} />}
    </Layout>
  );
};

export default EditorialTemplate;