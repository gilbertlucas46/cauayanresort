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
                      <Slider {...settings} >
                        {item.slider.map(img => {
                          return (
                            <Img key={img.childImageSharp.fluid.originalName} fluid={img.childImageSharp.fluid}/>
                          )
                        })}
                      </Slider>
                      {item.desc}
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
