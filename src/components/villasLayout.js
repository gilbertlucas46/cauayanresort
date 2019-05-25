import React, { Component } from 'react'
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled from 'styled-components'
import Img from 'gatsby-image'
import {ButtonLink} from '../components/utils/button'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ContactInfo from '../components/contactInfo'

const VillaSlider = styled.div`
  @media(min-width: 1600px){
    max-width:724px;
  }
  @media(min-width: 992px) and (max-width:1599px){
    max-width:680px;
  }
  .slick-slider {
    
  }
  .slick-next{
    right:2rem;
    z-index:99;
  }
  .slick-prev {
    left: 2rem;
    z-index:99;
  }
  .slick-prev,.slick-next{
    width: 2rem;
    height: 2rem;
    &:before {
      font-size:2rem;
    }
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
  
  @media(min-width: 992px) {
    display:grid;
  }
 @media(min-width: 1600px){
    max-width: 65rem !important
  }
  @media(min-width: 992px) and (max-width:1599px){
    max-width:70rem !important
  }
  @media (max-width:991px){
    max-width:70rem !important
  }
  @media (min-width:1200px) {
    grid-template-columns: 1fr  350px;
    grid-gap: 40px;
  }
  @media (min-width:992px) and (max-width: 1199px) {
    grid-template-columns: 1fr  1fr;
    grid-gap: 35px;
    max-width: 65.2rem !important;
  }
  aside {
    .bookSpace {
      background-color: #D6D1CA;
      padding: 1.8rem 0;
      margin-bottom: 2rem;
      span {
        width: 85% !important;
        margin:auto;
      }
      a {
        color:white;
        text-decoration:none;
      }
      h4 {
        color: #5C3327;
        text-align:center;
        font-size: 2rem;
       
      }
    }
    .col.contact{
      li {
        padding-left:38px;
        transition: all ease-out  0.2s;
        svg {
          max-width:22px;
          transition: all ease-out  0.5s;
          path {
            fill: #5C3327;
          }
        }
        &:hover{
            padding-left:48px;
            svg {
              left: 10px;
            }
          }
      }
    }
  }
  .title {
    display:none;
  }
  h6 {
    font-size: 1.5rem;
    text-align:center;
    color: #5C3327;
    padding-bottom: 1rem;
    border-bottom: 1px solid #D6D1CA !important;
  }
`;
const Villa =  styled.div`
.gatsby-image-wrapper {
  max-height:600px;
}

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
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
      };
    return (
      <Layout location={location} >
        {allMarkdownRemark.edges.map(nodes => {
          return (
            <VillasContainer className="container" key={nodes.node.frontmatter.title}>
              <Villa>
                <VillaSlider>
                <Slider {...settings} >
                  {nodes.node.frontmatter.slider.map(img => {
                    return (
                      <Img key={img.image.name} fluid={img.image.childImageSharp.fluid}/>
                    )
                  })}
                </Slider>
                </VillaSlider>
                <h1>{nodes.node.frontmatter.title}</h1>
                <p>{nodes.node.frontmatter.desc}</p>
              </Villa>
              <aside>
                <div className="bookSpace">
                  <h4>STAY WITH US</h4>
                  <ButtonLink>
                    <a aria-label={nodes.node.frontmatter.title} href="https://redirect.fastbooking.com/DIRECTORY/dispoprice.phtml?showPromotions=1&amp;Hotelnames=ASIAPHHTLCauayanIsla&amp;Clusternames=ASIAPHHTLCauayanIsla">BOOK NOW</a>
                  </ButtonLink>
                </div>
                <h6>Direct Reservation</h6>
                <ContactInfo/>
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
          slider{
            image {
              name
              childImageSharp{
                fluid(maxWidth:652){
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
`