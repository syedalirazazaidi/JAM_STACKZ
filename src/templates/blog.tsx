import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Nav from "../components/nav"
import "./blog.css"
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"

const Blog = ({ data }: any) => {
  console.log(data.contentfulPost.content)
  const { content } = data.contentfulPost

  return (
    <Layout>
      <div className="nav-style">
        <Nav />
      </div>

      <div className="cms-content">
        <p>{documentToPlainTextString(JSON.parse(content.raw))}</p>

        {/* <img alt={title} src={image.file.url} /> */}

        {/* <Link to="/blog">View more posts</Link> */}
        {/* <Link to="/">Back to Home</Link> */}
      </div>
    </Layout>
  )
}
export default Blog
export const pageQuery = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      content {
        raw
      }
      image {
        file {
          url
        }
      }
    }
  }
`

// "gatsby-transformer-sharp": "^2.6.0",

// "gatsby-transformer-remark": "^2.13.1",
// "gatsby-plugin-sharp": "^2.8.0",

// "gatsby-source-contentful": "4.3.1",

// "gatsby-plugin-manifest": "^2.6.1",
