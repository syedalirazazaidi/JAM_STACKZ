import React from "react"
import { StaticQuery, graphql, navigate } from "gatsby"
import Img from "gatsby-image"
import "./home.css"
const HomeBlog = () => (
  <StaticQuery
    query={graphql`
      query HomeQuery {
        blog: allContentfulPost(sort: { fields: [createdAt], order: DESC }) {
          edges {
            node {
              title
              subtitle
              author
              slug
              id
              createdAt(formatString: "MMMM Do, YYYY")

              image {
                fluid(maxWidth: 1200, quality: 85) {
                  src
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <header>
        {
          <div className="feed">
            {data.blog.edges.map(edge => (
              <div
                key={edge.node.id}
                className="card"
                onClick={() => navigate(`/blog/${edge.node.slug}`)}
              >
                <img
                  src={edge.node.image.fluid.src}
                  alt="image"
                  className="images"
                />
                <div className="card_title">
                  <p className="card_name">NETLIFY CMS</p>
                  <p>{edge.node.title}</p>
                  <p>{edge.node.createdAt}</p>
                </div>
              </div>
            ))}
          </div>
        }
      </header>
    )}
  ></StaticQuery>
)

export default HomeBlog
