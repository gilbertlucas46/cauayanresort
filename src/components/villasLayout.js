import React, { Component } from 'react'
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled from 'styled-components'
import Img from 'gatsby-image'
import {ButtonLink} from '../components/utils/button'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const VillaSlider = styled.div`
  max-width:680px;
  .slick-next{
    right:20px;
    z-index:99;
  }
  .slick-dots {
   bottom: -35px;
   text-align:left;
  }
  .slick-active{
    button{
      &:before {
        color:#BCB2B2 !important;
      }
    }
  }
  .slick-prev {
    left: 20px;
    z-index:99;
  }
  .slick-dots {
    li {
      button {
        &:before {
          font-size:18px;
        }
      }
    }
  }
  .slide {
    position:relative;
    margin-bottom:3rem;
    h3 {
      position: absolute;
      z-index:99;
      height: 3rem;
      background-color: #292929;
      text-align:center;
      width:100%;
      bottom:-2.9rem;
      margin:0;
      line-height:3rem;
      font-size:1rem;
      letter-spacing:1px;
    }
  }
`;

const VillasContainer = styled.div`
  @media (min-width:992px) {
    display:grid;
    grid-template-columns: 1fr  350px;
    grid-gap: 40px;
    max-width: 65.2rem !important;
  }
  aside {
    .bookSpace {
      background-color: #D6D1CA;
      h4 {
        color: #5C3327;
        font-size: 1rem;
        text-align:center;
      }
    }
  }
`;
const Villa =  styled.div`
  h1 {
    text-align:center;
    font-size: 2.2rem;
    margin-top: 1.5rem;
    color: #5C3327;
  }
  p {
    text-align:left;
  }
`;
export default class VillasLayout extends Component {
  render() {
      const {allMarkdownRemark} = this.props.data;
      const { location } = this.props;
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
      <Layout location={location} >
        {allMarkdownRemark.edges.map(nodes => {
          return (
            <VillasContainer className="container" key={nodes.node.frontmatter.title}>
              <Villa>
                <VillaSlider>
                <Slider {...settings} >
                
                </Slider>
                </VillaSlider>
                <h1>{nodes.node.frontmatter.title}</h1>
                <p>{nodes.node.frontmatter.desc}</p>
              </Villa>
              <aside>
                <div className="bookSpace">
                  <h4>STAY WITH US</h4>
                  <ButtonLink href="https://redirect.fastbooking.com/DIRECTORY/dispoprice.phtml?showPromotions=1&amp;Hotelnames=ASIAPHHTLCauayanIsla&amp;Clusternames=ASIAPHHTLCauayanIsla" aria-label={nodes.node.frontmatter.title}>BOOK NOW</ButtonLink>
                </div>
              </aside>
            </VillasContainer>
          )
        })}
      </Layout>
    )
  }
}
export const query = graphql`
   query PostQuery($slug: String!) {
     allMarkdownRemark(filter: {
      frontmatter:  { title: { eq:$slug}
      }}){
    edges{
      node{
        frontmatter {
          title
          desc
          image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
}
`