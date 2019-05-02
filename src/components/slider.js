import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'
import Img from 'gatsby-image'
import './utils/fonts/high-tide/fonts.css';

const Slide = styled.ul`
  margin:0;
  li.slideContainer {
    position:relative;
    .caption{
      @media (max-width: 767px){
        h1 {
          margin-bottom:0;
          padding-bottom:0.5rem;
          font-size:3rem !important;
        }
        p {
          font-size: 1rem !important;
          margin-bottom:0.8rem;
        }
      }
      position:absolute;
      top:0;
      bottom:0;
      left:0;
      right:0;
      margin:auto;
      text-align: center;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      overflow: hidden;
      h1 {
        font-family: 'high-tide';
        color:white;
        font-size:5rem;
        font-weight:lighter;
        position:relative;
        padding-bottom:1rem;
       
        &:before {
          content: '';
          height: 0.2rem;
          background-color: white;
          max-width: 5.5rem;
          position: absolute;
          width: 100%;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          @media (max-width:767px) {
            display:none;
          }
        }
      }
      p {
        font-family: 'Conv_majalla';
        color:white;
        font-size:1.5rem;
      }
      a {
        position: relative;
        color:white;
        height:2.8rem;
        width: 8rem;
        background-color: #5C3327;
        line-height:2.8rem;
        text-decoration:none;
        border-radius:4px;
        transition: background-color 0.5s ease;
        font-family: 'Conv_majalla';
        font-size: 1.2rem;
        &:hover {
          background-color: #48251b;
        }
        svg {
          /* position:absolute; */
          max-width: 1.3rem;
          margin-bottom: -5px;
          margin-right:8px;
        }
      }
    }
  }
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
                image {
                  childImageSharp {
                    fluid(maxWidth:1920){
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

const Slider = () => (
  <StaticQuery
  query={HOME_QUERY}
  render={({allMarkdownRemark}) => (
    <Slide>
      {allMarkdownRemark.edges.map(edge => (
        edge.node.frontmatter.home.slider.map(slide => (
          <li className="slideContainer" key={slide.title.split(' ').join('-').toLowerCase()}>
            <Img fluid={slide.image.childImageSharp.fluid} />
            <div className="caption">
              <h1 className="title">{slide.title}</h1>
              <p>{slide.caption}</p>
              <Link to={`/${slide.url}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25"><path d="M23.2 12.6l-.9 1c-.1.1-.2.1-.3.2-.1 0-.2 0-.3-.1l-9.7-8-9.7 8c-.1.1-.2.1-.3.1s-.2-.1-.3-.2l-.9-1c-.1-.1-.1-.2-.1-.3s.1-.2.2-.3l10-8.4c.3-.2.7-.4 1.1-.4s.8.1 1.1.4l3.4 2.8V3.7c0-.1 0-.2.1-.3s.2-.1.3-.1h2.7c.1 0 .2 0 .3.1s.1.2.1.3v5.7l3.1 2.5c.1.1.1.2.2.3 0 .2 0 .3-.1.4zm-3.1 1v6.7c0 .2-.1.5-.3.6-.2.2-.4.3-.6.3h-5.4v-5.4h-3.6v5.4H4.9c-.2 0-.5-.1-.6-.3s-.3-.4-.3-.6v-6.7L12 7l8.1 6.6c0-.1 0-.1 0 0z" fill="#fff" /></svg>
              {slide.button}
              </Link>
            </div>
          </li>
        ))
      ))}
    </Slide>
  )}/>
)

export default Slider
