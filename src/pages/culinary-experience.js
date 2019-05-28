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

import { StaticQuery, graphql, Link } from "gatsby"
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

`;
const TabContents = styled.div`

`;
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
                      <VillaSlider>
                        <Slider {...settings} >
                          {item.slider.map(img => {
                            return (
                              <Img key={img.childImageSharp.fluid.originalName} fluid={img.childImageSharp.fluid}/>
                            )
                          })}
                        </Slider>
                      </VillaSlider>
                      <div dangerouslySetInnerHTML={{ __html: item.desc }}></div>
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
