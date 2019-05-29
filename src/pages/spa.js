import React from "react"
import styled from 'styled-components'

import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"


const SPA_QUERY = graphql`
  query SpaTabs{
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/pages/main/"}}) {
      edges {
        node {
          frontmatter {
            title
            spa {
             desc
              tspa {
                image {
                  childImageSharp {
                    fluid(maxWidth: 600){
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                      originalName
                    }
                  }
                }
                title
                desc
              }
            }
          }
        }
      }
    }
  }
`;

const SpaContainer = styled.div`
  .intro {
    text-align:center;
  }
  
`;
const SpaContent = styled.div`
  @media(min-width: 768px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }
`;
const SpaDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  h3 {
    color: #5C3327;
    text-align:center;
    @media (max-width:767px) {
      margin-top: 2rem;
    }
  }
  p {
    margin-bottom:0;
  }
`;


const Spa = ({location}) => (
  <StaticQuery
  query={SPA_QUERY}
  render={({allMarkdownRemark}) => (
    <Layout location={location}>
      <article>
        <SpaContainer className="container">
          {allMarkdownRemark.edges.map(edge => {
            const items = edge.node.frontmatter.spa.tspa;
            return (
              <>
                <div className="intro">
                  <p>{edge.node.frontmatter.spa.desc}</p>
                </div>
                {items.map(spa => (
                  <SpaContent>
                    <Img key={spa.image.childImageSharp.fluid.originalName} fluid={spa.image.childImageSharp.fluid}/>
                    <SpaDescription>
                      <h3>{spa.title}</h3>
                      <p>{spa.desc}</p>
                    </SpaDescription>
                  </SpaContent>
                ))}
              </>
              
            )
          })} 
        </SpaContainer>
      </article>
    </Layout>
  )}
  />
)

export default Spa
