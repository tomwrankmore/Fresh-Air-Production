const { isFuture, parseISO } = require("date-fns");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createProjectPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityEditorial(filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
      allSanityPodcast(filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
      allSanityGenericPageType(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const editorialEdges = (result.data.allSanityEditorial || {}).edges || [];
  const podcastEdges = (result.data.allSanityPodcast || {}).edges || [];
  const genericPageEdges = (result.data.allSanityGenericPageType || {}).edges || [];

  editorialEdges
    .filter(edge => !isFuture(parseISO(edge.node.publishedAt)))
    .forEach(edge => {
      const id = edge.node.id;
      const slug = edge.node.slug.current;
      const path = `/editorial/${slug}/`;

      createPage({
        path,
        component: require.resolve("./src/templates/editorial.js"),
        context: { id }
      });
    });
  podcastEdges
    .filter(edge => !isFuture(parseISO(edge.node.publishedAt)))
    .forEach(edge => {
      const id = edge.node.id;
      const slug = edge.node.slug.current;
      const path = `/podcast/${slug}/`;

      createPage({
        path,
        component: require.resolve("./src/templates/podcast.js"),
        context: { id }
      });
    });
    genericPageEdges
    .forEach(edge => {
      const id = edge.node.id;
      const slug = edge.node.slug.current;
      const path = `/fresh-page/${slug}/`;

      createPage({
        path,
        component: require.resolve("./src/templates/generic-page.js"),
        context: { id }
      });
    });
}

exports.createPages = async ({ graphql, actions }) => {
  await createProjectPages(graphql, actions);
};
