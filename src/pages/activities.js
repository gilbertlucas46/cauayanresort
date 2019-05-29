import React from "react"
import styled from 'styled-components'

import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"


const Activities_QUERY = graphql`
  query ActivitiesTabs{
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/pages/main/"}}) {
      edges {
        node {
          frontmatter {
            title
            activities {
             desc
              tactivities {
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

const ActivitiesContainer = styled.div`
  .intro {
    text-align:center;
  }
  
`;
const ActivitiesContent = styled.div`
  @media(min-width: 768px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }
`;
const ActivitiesDescription = styled.div`
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


const Activities = ({location}) => (
  <StaticQuery
  query={Activities_QUERY}
  render={({allMarkdownRemark}) => (
    <Layout location={location}>
      <article>
        <ActivitiesContainer className="container">
          {allMarkdownRemark.edges.map(edge => {
            const items = edge.node.frontmatter.activities.tactivities;
            return (
              <>
                <div className="intro">
                  <p>{edge.node.frontmatter.activities.desc}</p>
                </div>
                {items.map(activities => (
                  <ActivitiesContent>
                    <Img key={activities.image.childImageSharp.fluid.originalName} fluid={activities.image.childImageSharp.fluid}/>
                    <ActivitiesDescription>
                      <h3>{activities.title}</h3>
                      <p>{activities.desc}</p>
                    </ActivitiesDescription>
                  </ActivitiesContent>
                ))}
              </>
              
            )
          })} 
        </ActivitiesContainer>
      </article>
    </Layout>
  )}
  />
)

export default Activities
