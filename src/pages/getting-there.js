import React from "react"
import styled from 'styled-components'

import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import Video from '../components/video'

import Layout from "../components/layout"


const GettingThere_QUERY = graphql`
  query GettingTherePage{
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/pages/main/"}}) {
      edges {
        node {
          frontmatter {
            title
            howtogetthere{
              desc
              gettingthere{
                title
                desc
                image{
                  childImageSharp{
                    fluid(maxWidth:600){
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

`;

const GettingThereContainer = styled.div`
  
`;
const GettingThereContent = styled.div`

`;


const GettingThere = ({location}) => (
  <StaticQuery
  query={GettingThere_QUERY}
  render={({allMarkdownRemark}) => (
    <Layout location={location}>
      <article>
        <GettingThereContainer className="container">
          {allMarkdownRemark.edges.map(edge => {
            const items = edge.node.frontmatter.howtogetthere;
            return (
            <GettingThereContent>
              {items.gettingthere.map(direction => (
                <>
                  <h3>{direction.title}</h3>
                  <div dangerouslySetInnerHTML = {{ __html: direction.desc }} />
                </>
              ))}
            </GettingThereContent>
            )
          })} 
        </GettingThereContainer>
      </article>
    </Layout>
  )}
  />
)

export default GettingThere
