const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPost = path.resolve(`src/template/blog-template.tsx`)
  //   const result = await graphql
  return graphql(`
    {
      blog: allContentfulPost {
        edges {
          node {
            title
            subtitle
            author
            slug
            image {
              fluid {
                src
              }
            }
            content {
              raw
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
  })
  const posts = result.data.blog.edges
  posts.forEach((post, index) => {
    console.log(post)
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    createPage({
      path: post.node.slug,
      component: blogPost,
      context: {
        slug: post.node.slug,
        previous,
        next,
      },
    })
  })

  //   result.data.blog.edges.nodes.forEach(product => {
  //     console.log(product, "PRODUCT")
  //     createPage({
  //       path: `/products/${product.slug}`,
  //       component: blogPost,
  //       context: {
  //         slug: product.slug,
  //       },
  //     })
  //   })
}
