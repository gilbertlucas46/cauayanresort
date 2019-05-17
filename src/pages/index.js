import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from '../components/slider'
import ImageNav from '../components/imageNav'
import Video from '../components/video'
import Intro from '../components/intro'
import HomeContact from '../components/homeContact'

const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Slider/>
    <ImageNav/>
    <Video/>
    <Intro/>
    <HomeContact/>
  </Layout>
)

export default IndexPage
