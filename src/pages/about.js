import React from "react"
import styled from 'styled-components'

import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import Video from '../components/video'

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
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
              videobg {
                childImageSharp{
                  fluid(maxWidth: 600){
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
`;

const AboutContainer = styled.div`
  .intro {
    text-align:center;
  }
  
`;
const AboutContent = styled.div`
  section {
    margin-bottom: 4rem;
    @media(min-width: 768px){
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 30px;
    }
    h3 {
      color: #5C3327;
      text-align:center;
      font-size:1.6rem;
      @media (max-width:767px) {
        margin-top: 2rem;
      }
    }
  }
  .aboutCauayan{
    .images {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;
    }
    .desc {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
    }
  }
  .philosophy {
    .images {
      .videoContainer{
        position:relative;
      }
      .desktopView, .mobileView, .tabletView {
        display:none;
      }
      .video__VideoContainer-bgjgsQ{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        height: 100px;
        width: 100px;
      }
      .caption > div{
        height: auto;
        position: relative;
        padding: 0;
      }
      .caption {
        position: relative;
        h3,h4,.desc{
          display:none;
        }
      }
    }
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
                  {items.images.map(img => (
                    <Img key={img.image.childImageSharp.fluid.originalName} fluid={img.image.childImageSharp.fluid}/>
                  ))}
                </div>
                <div className="desc">
                  <div dangerouslySetInnerHTML = {{ __html: items.desc }} />
                </div> 
              </section>
              <section className="philosophy">
                <div className="desc">
                  <div dangerouslySetInnerHTML = {{ __html: items.phcontent }} />
                </div> 
                <div className="images">
                  <div className="videoContainer">
                    <Img key={items.videobg.childImageSharp.fluid.originalName} fluid={items.videobg.childImageSharp.fluid}/>
                    <Video/>
                  </div>
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
