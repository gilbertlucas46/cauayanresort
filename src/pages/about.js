import React from "react"
import styled from 'styled-components'

import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"


const About_QUERY = graphql`
  query AboutPage{
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/pages/main/"}}) {
      edges {
        node {
          frontmatter {
            title
            about{
              phcontent
              desc
              title
              images {
                image {
                  childImageSharp{
                    fluid(maxWidth:320){
                      src
                    }
                  }
                }
              }
              videobg {
                childImageSharp{
                  fluid(maxWidth: 600){
                    src
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

const AboutContainer = styled.div`
  .intro {
    text-align:center;
  }
  
`;
const AboutContent = styled.div`
  @media(min-width: 768px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }
`;
const AboutDescription = styled.div`
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


const About = ({location}) => (
  <StaticQuery
  query={About_QUERY}
  render={({allMarkdownRemark}) => (
    <Layout location={location}>
      <article>
        <AboutContainer className="container">
          {allMarkdownRemark.edges.map(edge => {
            const items = edge.node.frontmatter.about;
            return (
            <AboutContent>
              <section className="aboutCauayan">
                <div className="images">
                </div>
                <div className="desc">
                <div className="desc" dangerouslySetInnerHTML = {{ __html: items.desc }} />
                </div>
              </section>
            </AboutContent>
            )
          })} 
        </AboutContainer>
      </article>
    </Layout>
  )}
  />
)

export default About
// <Img key={activities.image.childImageSharp.fluid.originalName} fluid={activities.image.childImageSharp.fluid}/>
// <AboutDescription>
//   <h3>{activities.title}</h3>
//   <p>{activities.desc}</p>
// </AboutDescription>