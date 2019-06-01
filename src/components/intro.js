import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'
import Img from 'gatsby-image'

import ReadMore from '../components/utils/btnReadmore'

const IntroContainer = styled.div`
  .introContent {
    .desc {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      text-align:center;
      @media (max-width:767px) {
        margin-top: 15px; 
      }
      h4 {
        font-family: 'Conv_CASTELAR';
        font-size:1.8rem;
        font-weight: 300;
      }

      a {
        display:block;
        span {
          text-align:center;
          margin:auto;
        }
      }
    }
  }
  a {
    text-decoration:none;
  }
`;


const INTRO_QUERY = graphql`
   query INTRO_QUERY {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/pages/main/"}}) {
      edges {
        node {
          frontmatter {
            title
            home {
              intro{
                island{
                  childImageSharp{
                    fluid(maxWidth:524){
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
                title
                desc
                link
              }
            }
          }
        }
      }
    }
  }
`;

const Intro = () => (
  <StaticQuery
  query={INTRO_QUERY}
  render={({allMarkdownRemark}) => (
    <IntroContainer>
      {allMarkdownRemark.edges.map(edge =>  {
        const welcome = edge.node.frontmatter.home.intro;
        return (
          <div className="introContent col-2 container" key="IntroModal">
            <Img fluid={welcome.island.childImageSharp.fluid}/>
            <div className="desc">
              <div>
                <h4>{welcome.title}</h4>
                <p>{welcome.desc}</p>
                <Link to={welcome.link}><ReadMore/></Link>
              </div>
            </div>
          </div>
        )
      })}
    </IntroContainer>
  )}/>
)


export default Intro
