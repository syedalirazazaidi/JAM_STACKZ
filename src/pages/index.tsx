import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Nav from "../components/nav"
import HomeBlog from "../components/home"
import Footer from "../components/footer"
// import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />

    <HomeBlog />
    <h1
      style={{
        color: "#fff",
        fontSize: "2.3rem",
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        top: 60,
        left: "15rem",
      }}
    >
      Articles
    </h1>
    <Footer />
  </Layout>
)

export default IndexPage
