import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from '../components/slider'
import ImageNav from '../components/imageNav'
const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Slider/>
    <ImageNav/>
  </Layout>
)

export default IndexPage
