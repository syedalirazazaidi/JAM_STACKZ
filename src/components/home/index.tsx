import React from "react"
import { StaticQuery, graphql, navigate } from "gatsby"
import Img from "gatsby-image"
import "./home.css"
const HomeBlog = () => (
  <StaticQuery
    query={graphql`
      query HomeQuery {
        blog: allContentfulPost(
          limit: 6
          sort: { fields: [createdAt], order: DESC }
        ) {
          edges {
            node {
              title
              subtitle
              author
              slug
              id
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
          <div>
            {data.blog.edges.map(edge => (
              <div
                key={edge.node.id}
                className="card"
                style={{
                  backgroundImage: `linear-gradient(
                to bottom,
                rgba(10,10,10,0) 0%,
                rgba(10,10,10,0) 50%,
                rgba(10,10,10,0) 100%,
                url(${edge.node.image.fluid.src})
              )`,
                }}
                // onClick={() => navigate(`/blog/${edge.node.slug}`)}
              >
                {/* fluid={allContentfulBlog.edges[0].node.coverImage.fluid}  */}
                <p style={{ color: "white" }}>{edge.node.title}</p>
                <img src={edge.node.image.fluid.src} alt="mage" />
              </div>
            ))}
          </div>
        }
      </header>
    )}
  ></StaticQuery>
)

export default HomeBlog
