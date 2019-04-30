import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Listings from "../components/listings"

const Slider = styled.ul`
  margin:0;
`;

const HOME_QUERY = graphql`
   query projects {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/pages/main/"}}) {
      edges {
        node {
          frontmatter {
            home {
              title
              slider {
                title
                caption
                button
                url
              }
            }
          }
        }
      }
    }
  }
`;

const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <StaticQuery
      query={HOME_QUERY}
      render={({allMarkdownRemark}) => (
        <Slider>
          {allMarkdownRemark.edges.map(edge => (
            edge.node.frontmatter.home.slider.map(slide => (
             <Slider>
                <li>
                  <h1 className="title">{slide.title}</h1>
                  <p>{slide.title}</p>
                  <Link to={`/${slide.url}`}><a>{slide.button}</a></Link>
                </li>
             </Slider>
            ))
          ))}
        </Slider>
      )}/>
    <Listings/>
  </Layout>
)

export default IndexPage
