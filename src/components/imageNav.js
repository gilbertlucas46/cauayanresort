import React from "react"
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image'

const IMGNAV_QUERY = graphql`
    query VillasImageNavigation {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/pages/main/"}}) {
        edges {
          node {
            frontmatter {
              title
              home {
                imagenav {
                  title
                  url
                  image {
                    childImageSharp{
                      fluid(maxWidth:570){
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

const ImageNav = styled.div`
  h3 {
    text-align:center;
    font-family: 'Conv_CASTELAR';
    font-size:2rem;
    color: #5C3327;
    font-weight: lighter;
  }
  .navCont{
    position:relative;
    .caption {
      display:flex;
      align-items:center;
      justify-content:center;
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
      a {
        background-color: rgba(92, 51, 39, 0.95);
        color: white;
        font-family: 'Conv_CASTELAR';
        display: block;
        height: 5rem;
        line-height: 5rem;
        text-decoration: none;
        font-size: 1.5rem;
        width: 70%;
        text-align: center;
        position:relative;
        @media (max-width:991px) {
          font-size: 1.1rem;
          width: 85%;
        }
        &:before, &:after {
          content: '';
            display: block;
            position:absolute;
            left:0;
            right:0;
            bottom:0;
            top:0;
            margin:auto;
        }
        &:before{
          border: 2px solid white;
          width: 94%;
          height: 72%;
        }
        &:after{
          border: 1px solid white;
          width: 90%;
          height: 50%;
          @media (max-width:991px) {
            width: 87%;
          }
        }
      }
    }
  }
`;
const NavMain  = styled.div`
  display:grid;
  max-width:1170px;
  margin:auto;

  @media (min-width:992px){
    grid-template-columns: 1fr 1fr;
    grid-gap:40px;
  }
  @media (max-width:991px){
    padding: 0 30px;
    grid-gap:20px;
  }
`;
const ImageNavigation = () => (
  <StaticQuery
    query={IMGNAV_QUERY}
    render={({allMarkdownRemark}) => (
        <>
        <ImageNav>
        <h3>Explore Cauayan Resort</h3>
          <NavMain>
            {allMarkdownRemark.edges.map((edge) => {
              const navs = edge.node.frontmatter.home;
              return (
                navs.imagenav.map(nav => (
                  <div key={nav.url} className="navCont">
                  <Img fluid={nav.image.childImageSharp.fluid} />
                    <div className="caption">
                      <Link to={nav.url}>{nav.title}</Link>
                    </div> 
                  </div>
                ))
              )
            })}
          </NavMain>
        </ImageNav>
      </>
      )
      
    }
  />
)

export default ImageNavigation

