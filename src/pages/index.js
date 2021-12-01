import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import App from "../components/app";



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Let's play Bingo!</h1>
    <p>Tally up you score when you hear them:</p>
    <App />
  </Layout>
)

export default IndexPage
