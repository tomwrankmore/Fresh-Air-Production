import React from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import Container from "../components/container";
import Editorial from "../components/editorial/editorial";
import SEO from "../components/seo";
import CentralLogo from "../components/central-logo-old"

export const query = graphql`
  query EditorialTemplateQuery($id: String!) {
    editorial: sanityEditorial(id: { eq: $id }) {
      omnyWidget
      id
      publishedAt
      id
      _rawBody
      quote
      title
      subTitle
      isLeftAlignedHeroImg
      heroBGColor {
        color
        title
      }
      heroImage {
          alt
          asset {
            gatsbyImageData
          }
        }
      mainImage {
        alt
        asset {
          gatsbyImageData
        }
      }
      slug {
        current
      }
      sectionOneImage {
          alt
          asset {
            gatsbyImageData
          }
        }
      sectionTwoImage {
        alt
        asset {
          gatsbyImageData
        }
      }
      relatedProjects {
        _id
        title
        slug {
          current
        }
        previewImage {
          alt
          asset {
            gatsbyImageData
          }
        }
      }
      _rawSectionOneText
      _rawSectionTwoText
      # isFeaturedPost
      heroImage {
        alt
        asset {
          gatsbyImageData
        }
      }
    }
  }
`;

const EditorialTemplate = props => {
  const { data, errors } = props;
  const editorial = data && data.editorial;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {editorial && <SEO title={editorial.title || "Untitled"} />}
      <CentralLogo />
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