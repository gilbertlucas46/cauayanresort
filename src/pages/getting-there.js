import React from "react"
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

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
  .intro {
    p{
      text-align:center;
    }
  }
`;
const GettingThereContent = styled.div`
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
      display:block;
      &:first-of-type{
        margin-top:0;
      }
    }
  }
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
              <>
              <div className="intro">
               <p dangerouslySetInnerHTML = {{ __html: items.desc }}/>
              </div>
                <GettingThereContent>
                  {items.gettingthere.map(direction => (
                    <>
                      <div className="direction">
                        <Img key={direction.image.childImageSharp.fluid.originalName} fluid={direction.image.childImageSharp.fluid}/>
                        <h3>{direction.title}</h3>
                        <div className="desc">
                          <p dangerouslySetInnerHTML = {{ __html: direction.desc }}/>
                        </div>
                      </div>
                    </>
                  ))}
                </GettingThereContent>
              </>
            )
          })} 
        </GettingThereContainer>
      </article>
    </Layout>
  )}
  />
)

export default GettingThere
