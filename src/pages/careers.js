import React from "react"
import styled from 'styled-components'

import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import Video from '../components/video'

import Layout from "../components/layout"


const Careers_QUERY = graphql`
  query CareersPage{
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

const CareersContainer = styled.div`
  .intro {
    p{
      text-align:center;
    }
  }
`;
const CareersContent = styled.div`
  @media(min-width: 768px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }
  .direction{
    h3 {
      color: #5C3327;
      text-align:center;
      font-size: 2rem;
      margin-top: 2rem;
    }
    strong {
      margin-top:1.5rem;
      color: #5C3327;
      &:first-of-type{
        margin-top:0;
      }
    }
  }
`;


const Careers = ({location}) => (
  <StaticQuery
  query={Careers_QUERY}
  render={({allMarkdownRemark}) => (
    <Layout location={location}>
      <article>
        <CareersContainer className="container">
          {allMarkdownRemark.edges.map(edge => {
            const items = edge.node.frontmatter.howtogetthere;
            return (
              <>
              <div className="intro">
               <p dangerouslySetInnerHTML = {{ __html: items.desc }}/>
              </div>
                <CareersContent>
                  {items.gettingthere.map(direction => (
                    <>
                     
                    </>
                  ))}
                </CareersContent>
              </>
            )
          })} 
        </CareersContainer>
      </article>
    </Layout>
  )}
  />
)

export default Careers
