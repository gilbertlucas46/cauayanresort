import React from "react"
import styled from 'styled-components'
  import 'rc-tabs/assets/index.css';

//tabs
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

//slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"


const CULINARY_QUERY = graphql`
  query CulinaryTabs{
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/pages/main/"}}) {
      edges {
        node {
          frontmatter {
            title
            culinaryexperience {
              tabs {
                title
                tab
                slider {
                  childImageSharp {
                    fluid(maxWidth: 700) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                      originalName
                    }
                  }
                }
                desc
              }
            }
          }
        }
      }
    }
  }
`;

const CulinaryContainer = styled.div`
  .rc-tabs-top {
    border: 0 !important;
  }
  .rc-tabs-bar {
    margin-bottom: 4rem;
    border: 0 !important;
  }
  .rc-tabs-nav-container {
    .rc-tabs-nav-wrap{
      width: 100%;  
      .rc-tabs-nav-scroll{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
        margin: auto;
        @media (min-width: 768px) {
          max-width: 80%; 
        }
        @media (max-width: 767px) {
          max-width: 100%; 
        }
        .rc-tabs-ink-bar.rc-tabs-ink-bar-animated{
          height: 3rem;
          background-color: #5C3327;
          z-index: -1;
          display:none !important;
        }
      }
      .rc-tabs-nav {
        float: none;
      }
      .rc-tabs-nav > div{
        display: flex;
        flex: 1;
        width: 100%;
        .rc-tabs-tab{
          flex-basis: 33.3333%;
          display: flex;
          flex-shrink: 0;
          margin-right: 0;
          padding: 8px 0;
          justify-content: center;
          background-color: #D6D1CA;
          color: #1F1F1F;
          padding: 0 1.4rem;
          height: 3rem;
          line-height: 3rem;
          font-family: 'Conv_majalla';
          font-size:1.2rem;
          &:first-of-type {
            border-radius: 3rem 0 0 3rem;
            margin-right: 1px;
          }
          &:last-of-type {
            border-radius: 0 3rem 3rem 0;
            margin-left: 1px;
          }
        }
        .rc-tabs-tab-active.rc-tabs-tab {
          color: white;
          background-color: #5C3327;
        }
      }
    }
  }
`;
const CulinaryDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  h2 {
    color: #5C3327;
    text-align:center;
  }
`;
const TabContents = styled.div`
  @media(min-width: 1200px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }
`;
const CulinarySlider = styled.div`
  @media(min-width: 1400px){
    max-width:510px;
  }
  @media(min-width: 1441px) {
    max-width:100%;
    max-width:587px
  }
  @media(max-width: 992px) {
    margin-bottom: 3rem
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

const callback = function(key){
 
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
};

const CulinaryExperience = ({location}) => (
  <StaticQuery
  query={CULINARY_QUERY}
  render={({allMarkdownRemark}) => (
    <Layout location={location}>
      <article>
        <CulinaryContainer className="container">
          {allMarkdownRemark.edges.map(edge => {
            const items = edge.node.frontmatter.culinaryexperience.tabs;
            return (
              <Tabs
                defaultActiveKey={items[0].title}
                onChange={callback}
                renderTabBar={()=><ScrollableInkTabBar />}
                renderTabContent={()=><TabContent/>}
                >
                {
                  items.map(item => (
                    <TabPane tab={item.tab} key={item.title}>
                      <TabContents>
                      <CulinarySlider>
                        <Slider {...settings} >
                          {item.slider.map(img => {
                            return (
                              <Img key={img.childImageSharp.fluid.originalName} fluid={img.childImageSharp.fluid}/>
                            )
                          })}
                        </Slider>
                      </CulinarySlider>
                      <CulinaryDescription>
                          <div>
                          <h2>{item.title}</h2>
                          <div dangerouslySetInnerHTML={{ __html: `<p>${item.desc}</p>` }}></div>
                          </div>
                      </CulinaryDescription>
                      </TabContents>
                    </TabPane>
                  ))
                }
                  
                </Tabs>
              
            )
          })} 
        </CulinaryContainer>
      </article>
    </Layout>
  )}
  />
)

export default CulinaryExperience
