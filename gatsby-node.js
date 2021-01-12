// const { rejects } = require("assert")
// const path = require(`path`)

// const slash = require(`slash`)
// exports.onPostBuild = ({ reporter }) => {
//   reporter.info(`Your Gatsby site has been built!`)
// }
// const makeRequest = (graphql, request) =>
//   new Promise((resolve, rejects) => {
//     resolve(
//       graphql(request).then(result => {
//         if (result.errors) {
//           rejects(result.errors)
//         }
//         return result
//       })
//     )
//   })
// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   const blogPostTemplate = path.resolve(`./src/templates/blog.tsx`)
//   const getBlog = makeRequest(
//     graphql,
//     `
//      {allContentfulPost(sort:{field:[createdAt],order :DESC}) {
//                    edges {
//                   node {
//                     id
//                     title
//                     slug
//                     content {
//                     raw
//                    }
//                 }

//                }
//   }
//   `
//   ).then(result => {
//     result.data.allContentfulPost.edges.forEach(edge => {
//       createPage({
//         path: `/blog/${edge.node.slug}`,

//         component: slash(blogPostTemplate),
//         context: {
//           data: node,
//           // title: edge.node.title,
//           slug: edge.node.slug,
//           id: edge.node.id,
//         },
//       })
//     })
//   })
//   return Promise.all([getBlog])

// const getBlog = await graphql(`
//   query {
//     allContentfulPost(sort:{field:[createdAt],order :DESC}) {
//               edges {
//                node {
//                  id
//                  title
//                  slug
//                  content {
//                   raw
//                 }
//              }

//             }
//   }
// `)
//   result.data.allContentfulPost.edges.forEach(edge => {
//     console.log(edge, "LPLLLLL")
//     createPage({
//       path: `/blog/${edge.node.slug}`,
//       component: blogPostTemplate,
//       context: {
//         data: node,
//         // title: edge.node.title,
//         // slug: edge.node.slug,
//         id: edge.node.id,
//       },
//     })
//   })
// }
const path = require(`path`)
const slash = require(`slash`)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  // we use the provided allContentfulBlogPost query to fetch the data from Contentful
  return graphql(
    `
      {
        allContentfulPost {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `
  )
    .then(result => {
      console.log("result", result)

      if (result.errors) {
        console.log("Error retrieving contentful data", result.errors)
      }
      // Resolve the paths to our template
      const blogPostTemplate = path.resolve("./src/templates/blog.tsx")
      // Then for each result we create a page.
      result.data.allContentfulPost.edges.forEach(edge => {
        createPage({
          path: `/${edge.node.slug}/`,
          component: slash(blogPostTemplate),
          context: {
            slug: edge.node.slug,
            id: edge.node.id,
            data: edge.node,
          },
        })
      })
    })
    .catch(error => {
      console.log("Error retrieving contentful data", error)
    })
}
