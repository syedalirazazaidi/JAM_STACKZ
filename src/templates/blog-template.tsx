import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Nav from "../components/nav"

export const BlogTemplate = ({ props }) => {
  console.log(props, "PROPS")

  return (
    <Layout>
      <Nav />
      <div
        dangerouslySetInnerHTML={{
          __html: `${props.data.contentfulPost.childMarkdownRemark.html}`,
        }}
      ></div>
    </Layout>
  )
}
export const query = graphql`
  query BlogTemplate($id: String!) {
    contentfulPost(id: { eq: $id }) {
      title
      id
      slug
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
