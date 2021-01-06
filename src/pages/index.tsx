import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Nav from "../components/nav"
import HomeBlog from "../components/home"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <HomeBlog />
  </Layout>
)

export default IndexPage
