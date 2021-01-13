import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Nav from "../components/nav"
import "./blog.css"
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"
const Blog = ({ data }) => {
  console.log(data.contentfulPost.content)
  const { title, body, image, tags, content } = data.contentfulPost
  // const { title, body, image, tags } = data.contentfulBlogPost
  // console.log(title, "DATA", body, "ID")
  // console.log("body", JSON.parse(data))
  console.log("SLUG", title, "ID")

  return (
    <Layout>
      <div className="nav-style">
        <Nav />
      </div>

      <div
        style={{
          color: "green",
          margin: "0 auto",
          width: "500px",
          height: "250px",
          marginTop: "12rem",
        }}
      >
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
