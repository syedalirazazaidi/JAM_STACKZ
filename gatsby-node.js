const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPost = path.resolve(`src/template/blog-template.tsx`)
  const result = await graphql(`
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
  `)

  result.data.blog.edges.nodes.forEach(product => {
    console.log(product, "PRODUCT")
    createPage({
      path: `/products/${product.slug}`,
      component: blogPost,
      context: {
        slug: product.slug,
      },
    })
  })
}
