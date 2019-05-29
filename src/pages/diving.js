import React from "react"
import styled from 'styled-components'

import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"


const DIVING_QUERY = graphql`
  query DivingTabs{
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/pages/main/"}}) {
      edges {
        node {
          frontmatter {
            title
            diving {
             desc
              tdiving {
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

const DivingContainer = styled.div`
  .intro {
    text-align:center;
  }
  
`;
const DivingContent = styled.div`
  @media(min-width: 768px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }
`;
const DivingDescription = styled.div`
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


const Diving = ({location}) => (
  <StaticQuery
  query={DIVING_QUERY}
  render={({allMarkdownRemark}) => (
    <Layout location={location}>
      <article>
        <DivingContainer className="container">
          {allMarkdownRemark.edges.map(edge => {
            const items = edge.node.frontmatter.diving.tdiving;
            return (
              <>
                <div className="intro">
                  <p>{edge.node.frontmatter.diving.desc}</p>
                </div>
                {items.map(diving => (
                  <DivingContent>
                    <Img key={diving.image.childImageSharp.fluid.originalName} fluid={diving.image.childImageSharp.fluid}/>
                    <DivingDescription>
                      <h3>{diving.title}</h3>
                      <p>{diving.desc}</p>
                    </DivingDescription>
                  </DivingContent>
                ))}
              </>
              
            )
          })} 
        </DivingContainer>
      </article>
    </Layout>
  )}
  />
)

export default Diving
