const {isFuture,parseISO} = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createProjectPages (graphql, actions) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanitySampleProject(filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}) {
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
      allSanityEditorial(filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}) {
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
      allSanityPodcast(filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}) {
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
    }
  `)

  if (result.errors) throw result.errors

  const projectEdges = (result.data.allSanitySampleProject || {}).edges || []
  const editorialEdges = (result.data.allSanityEditorial || {}).edges || []
  const podcastEdges = (result.data.allSanityPodcast || {}).edges || []

  // projectEdges
  //   .filter(edge => !isFuture(parseISO(edge.node.publishedAt)))
  //   .forEach(edge => {
  //     const id = edge.node.id
  //     const slug = edge.node.slug.current
  //     const path = `/project/${slug}/`

  //     createPage({
  //       path,
  //       component: require.resolve('./src/templates/project.js'),
  //       context: {id}
  //     })
  //   })
  editorialEdges
    .filter(edge => !isFuture(parseISO(edge.node.publishedAt)))
    .forEach(edge => {
      const id = edge.node.id
      const slug = edge.node.slug.current
      const path = `/editorial/${slug}/`

      createPage({
        path,
        component: require.resolve('./src/templates/editorial.js'),
        context: {id}
      })
    })
  podcastEdges
    .filter(edge => !isFuture(parseISO(edge.node.publishedAt)))
    .forEach(edge => {
      const id = edge.node.id
      const slug = edge.node.slug.current
      const path = `/podcast/${slug}/`

      createPage({
        path,
        component: require.resolve('./src/templates/podcast.js'),
        context: {id}
      })
    })
}

exports.createPages = async ({graphql, actions}) => {
  await createProjectPages(graphql, actions)
}
