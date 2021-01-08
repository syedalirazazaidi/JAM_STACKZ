// const path = require("path")
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const blogPost = path.resolve("src/templates/blog-template.tsx")
//   return graphql(`
//     {
//       allContentfulPost(sort:{field:[createdAt],order :DESC}) {
//         edges {
//           node {
//             id
//             slug
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       console.log(result.errors, "ERROR")
//       throw result.errors
//     }
//     const posts = result.data.allContentfulPost.edges

//     posts.forEach((post, index) => {
//       // const previous = index === posts.length - 1 ? null : posts[index + 1].node
//       // const next = index === 0 ? null : posts[index - 1].node

//       console.log(post, "POSTTT")
//       createPage({
//         path: `blog/${post.node.slug}`,
//         component: blogPost,
//         context: {
//           slug: post.node.slug,
//           id: post.node.id,
//           // previous,
//           // next,
//         },
//       })
//     })
//     return
//   })
// }

const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`./src/templates/blog-template.tsx`)
  const result = await graphql(`
    query {
      allContentfulPost(sort:{field:[createdAt],order :DESC}) {
                edges {
                 node {
                   id
                   title
                   slug
               }
              }
    }
  `)
  result.data.allContentfulPost.edges.forEach(edge => {
    createPage({
      path: `${edge.node.slug}`,
      component: blogPostTemplate,
      context: {
        title: edge.node.title,
        slug: edge.node.slug,
        id: edge.node.id,
      },
    })
  })
}
