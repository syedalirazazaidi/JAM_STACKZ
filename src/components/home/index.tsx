import React from "react"
import { StaticQuery, graphql, navigate, Link } from "gatsby"
import Img from "gatsby-image"
import "./home.css"
import image from "../../static/mypic.jpg"
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
            author
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

                      <div className="aw-content">
                        <img
                          className="aw-content-img"
                          src={image}
                          width={24}
                        />
                        <div>
                          <p className="aw-title">
                            {data.site.siteMetadata.author}
                          </p>
                          <p className="aw-subtitle">{edge.node.createdAt}</p>
                        </div>
                      </div>
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
