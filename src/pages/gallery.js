import React from "react"
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"
import Img from '../components/image'
//slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Layout from "../components/layout"


const Gallery_QUERY = graphql`
  query GalleryPage {
    allFile(filter: {internal: {mediaType: {regex: "/image/"}}, sourceInstanceName: {eq: "gallery"}}) {
      nodes {
        relativePath
        childImageSharp {
          fluid(maxWidth: 300) {
            originalName
          }
        }
      }
    }
  }
`;

const GalleryContainer = styled.div`

`;
const GalleryContent = styled.div`
 display: inline-block;
 max-width: 50px;
`;


const Gallery = ({location}) => (
  <StaticQuery
  query={Gallery_QUERY}
  render={({allFile}) => (
    <Layout location={location}>
      <article>
        <GalleryContainer className="container">
          {allFile.nodes.map(item => {
            return (
              <>
                <GalleryContent>
                  <Img src={item.childImageSharp.fluid.originalName}/>
                </GalleryContent>
              </>
            )
          })} 
        </GalleryContainer>
      </article>
    </Layout>
  )}
  />
)

export default Gallery
