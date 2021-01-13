import React from "react"
import { StaticQuery, graphql, navigate, Link } from "gatsby"
import Img from "gatsby-image"
import "./home.css"
import { Helmet } from "react-helmet"
interface HeaderData {
  site: {
    siteMetadata: {
      title: string
      image: string
    }
  }
}
const HomeBlog = () => (
  <StaticQuery
    query={graphql`
      query HomeQuery {
        site {
          siteMetadata {
            title
            myImg
            description
          }
        }

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
          <div>
            <div className="feed">
              {data.blog.edges.map(edge => (
                <Link
                  key={edge.node.id}
                  className="card"
                  to={`/${edge.node.slug}/`}
                >
                  <div className="tile__border-bottom">
                    <img
                      src={edge.node.image.fluid.src}
                      alt="image"
                      className="images"
                    />
                    <div className="card_title">
                      <p className="card_name">NETLIFY CMS</p>
                      <p>{edge.node.title}</p>

                      <p>{edge.node.createdAt}</p>
                      {/* <img
                        src={data.site.siteMetadata.myImg}
                        alt="image"
                        className="images"
                      /> */}
                      <img
                        // className="default-avatar"
                        // src="/mypic.jpg"
                        alt="image"
                      />
                      {/* <p>{data.site.siteMetadata.description}</p> */}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        }
      </header>
    )}
  ></StaticQuery>
)

export default HomeBlog
