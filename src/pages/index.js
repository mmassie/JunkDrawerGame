import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import App from "../components/app";



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Elise's Cafe</h1>
    <p>Today's Menu</p>
    <App />
  </Layout>
)

export default IndexPage
