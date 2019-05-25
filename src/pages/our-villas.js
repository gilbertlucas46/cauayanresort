import React from "react"

import Layout from "../components/layout"
import Listings from '../components/listings'

const OurVillas = ({location}) => (
  <Layout location={location}>
    <Listings/>
  </Layout>
)
export default OurVillas
