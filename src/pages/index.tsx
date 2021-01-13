import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Nav from "../components/nav"
import HomeBlog from "../components/home"
import Footer from "../components/footer"
// import Footer from "../components/footer"
import "./index.css"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />

    <h1 className="main-h1">Articles</h1>
    <HomeBlog />
    <Footer />

    {/* <Link to="/${edge.node.slug}/">GO LINK</Link> */}
  </Layout>
)

export default IndexPage
