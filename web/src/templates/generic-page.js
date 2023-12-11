import React from "react";
import { graphql } from "gatsby";
import Layout from "../containers/layout";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Podcast from "../components/podcast/podcast";
import SEO from "../components/seo";

import CentralLogo from "../components/central-logo"


export const query = graphql`
  query GenericPageTemplateQuery($id: String!) {
    page: sanityGenericPageType(id: { eq: $id }) {
      id
      title
      slug {
        current
      }
    }
  }
`;

const PodcastTemplate = props => {
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
        {page.title}
      </Container>
    </Layout>
  );
};

export default PodcastTemplate;