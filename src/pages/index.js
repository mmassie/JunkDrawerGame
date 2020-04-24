import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import App from "../components/App";



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Clutter score your junk drawer</h1>
    <p>Tally up you score and let's hear it</p>
    <App />
  </Layout>
)

export default IndexPage
