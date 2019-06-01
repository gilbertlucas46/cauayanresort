import React, {Component} from "react"
import styled from 'styled-components'
import {graphql } from "gatsby"
import Img from 'gatsby-image'
//slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Layout from "../components/layout"


const GalleryContainer = styled.div`
  display: block !important;
  .mainSLide{
    .slick-slider{
      
    }
  }
  .gatsby-image-wrapper {
   
    margin-bottom: 1rem;
  }
  
  .thumbNav {
    .slick-slide > div{
      margin: 0 10px;
    }
    .slick-next{
      right:1rem;
      z-index:99;
    }
    .slick-prev {
      left: 1rem;
      z-index:99;
    }
    .slick-prev,.slick-next{
      width: 2rem;
      height: 2rem;
      &:before {
        font-size:2rem;
        text-shadow: 0 0 10px black;
      }
    }
    .slick-list{
      margin: 0 -0.5rem
    }
    .gatsby-image-wrapper {
      margin-bottom:0;
      img {
        margin-bottom:0;
      }
      @media (min-width:768px) {
        max-height: 5rem;
        min-height: 5rem;
      }
      @media (max-width: 767px) {
        max-height: 4rem;
      }
    }
  }
`;


export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
      const {allFile} = this.props.data;
      const { location } = this.props;
      const settings = {
        slidesToShow: 6,
        swipeToSlide: true,
        focusOnSelect: true,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
        ]
      };
    return (
      <Layout location={location} >
        <GalleryContainer className="container">
        <article>
          <div className="mainSLide">
            <Slider
            asNavFor={this.state.nav2}
            adaptiveHeight={true}
            ref={slider => (this.slider1 = slider)}
            >
            {allFile.nodes.map(item => (
              <Img key={item.childImageSharp.fluid} fluid={item.childImageSharp.fluid}/>
            ))} 
            </Slider>
          </div>
          <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          {...settings}
          className="thumbNav"
          >
          {allFile.nodes.map(item => (
            <Img key={item.childImageSharp.fluid} fluid={item.childImageSharp.fluid}/>
          ))} 
          </Slider>
          </article>
        </GalleryContainer> 
      </Layout>
    )
  }
}
export const query = graphql`
   query ImageQuery{
    allFile(filter: {internal: {mediaType: {regex: "/image/"}}, sourceInstanceName: {eq: "gallery"}}) {
      nodes {
        relativePath
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
            originalName
          }
        }
      }
    }
  }
`