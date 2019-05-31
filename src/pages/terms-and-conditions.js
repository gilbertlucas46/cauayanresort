import React from "react"
import styled from 'styled-components'

import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import Video from '../components/video'

import Layout from "../components/layout"


const Terms_QUERY = graphql`
  query TermsPage{
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

const TermsContainer = styled.div`
  .intro {
    p{
      text-align:center;
    }
  }
`;
const TermsContent = styled.div`
  @media(min-width: 768px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }
`;


const Terms = ({location}) => (
  <StaticQuery
  query={Terms_QUERY}
  render={({allMarkdownRemark}) => (
    <Layout location={location}>
      <article>
        <TermsContainer className="container">
          {allMarkdownRemark.edges.map(edge => {
            const items = edge.node.frontmatter.howtogetthere;
            return (
              <>
              <div className="intro">
               <p dangerouslySetInnerHTML = {{ __html: items.desc }}/>
              </div>
                <TermsContent>
                  {items.gettingthere.map(direction => (
                    <>
                     
                    </>
                  ))}
                </TermsContent>
              </>
            )
          })} 
        </TermsContainer>
      </article>
    </Layout>
  )}
  />
)

export default Terms
