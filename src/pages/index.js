import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import App from "../components/app";



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Clutter score your junk drawer</h1>
    <p>Tally up you score and let's hear it:</p>
    <App />
  </Layout>
)

export default IndexPage
