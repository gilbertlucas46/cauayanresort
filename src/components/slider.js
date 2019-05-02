import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'

const Slide = styled.ul`
  margin:0;
`;

const HOME_QUERY = graphql`
   query SLIDER_QUERY {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/pages/main/"}}) {
      edges {
        node {
          frontmatter {
            home {
              title
              slider {
                title
                caption
                button
                url
              }
            }
          }
        }
      }
    }
  }
`;

const Slider = () => (
  <StaticQuery
  query={HOME_QUERY}
  render={({allMarkdownRemark}) => (
    <Slide>
      {allMarkdownRemark.edges.map(edge => (
        edge.node.frontmatter.home.slider.map(slide => (
          <li key={slide.title.split(' ').join('-').toLowerCase()}>
            <h1 className="title">{slide.title}</h1>
            <p>{slide.title}</p>
            <Link to={`/${slide.url}`}>{slide.button}</Link>
          </li>
        ))
      ))}
    </Slide>
  )}/>
)

export default Slider
