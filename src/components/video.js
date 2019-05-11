import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'
import Img from 'gatsby-image'

const VideoContainer = styled.div`
`;

const VIDEO_QUERY = graphql`
   query VIDEO_QUERY {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/pages/main/"}}) {
      edges {
        node {
          frontmatter {
            title
            home {
              video {
                button {
                  childImageSharp {
                    fixed(width: 50) {
                      src
                    }
                  }
                }
                image{
                  childImageSharp {
                    fluid(maxWidth: 2000) {
                      src
                    }
                  }
                }
                title
                subtitle
                desc
                video
              }
            }
          }
        }
      }
    }
  }
`;

const Video = () => (
  <StaticQuery
  query={VIDEO_QUERY}
  render={({allMarkdownRemark}) => (
    <VideoContainer>
      {allMarkdownRemark.edges.map(edge =>  {
        const vid = edge.node.frontmatter.home.video;
        return (
          <div>
            <div className="caption">
              <div className="desc">
                {vid.desc}
              </div>
            </div>
            <div dangerouslySetInnerHTML = {{ __html: vid.video }} />
          </div>
        )
      })}
    </VideoContainer>
  )}/>
)

export default Video
