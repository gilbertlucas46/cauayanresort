import React from "react"
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import {ButtonLink} from '../components/utils/button'

const LISTINGS_QUERY = graphql`
    query VillasListings{
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/villas/"}}, 
    sort: {fields: [frontmatter___villasort], order: ASC}
    ){
    edges {
      node {
        frontmatter {
          title
          size
          image {
            childImageSharp {
              fluid(maxWidth: 652) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
}
`;

const VillasContainer = styled.div`
  text-align:center;
`;

const ViewDetails = styled.div`
  display:block;
  margin:auto;
  @media (min-width: 768px) {
   max-width: 220px; 
  }
  @media (max-width: 767px) {
   max-width: 90%; 
  }
  span {
    font-size:1.6rem;
    line-height:3rem;
    height: 3rem;
    border-radius:3rem;
  }
  a {
    text-decoration:none;
  }
`;
const Card =  styled.div`
  border-radius:10px;
  border: 1px solid #D6D1CA;
  padding-bottom: 3rem;
  overflow:hidden;
  transition: all .2s ease-in-out;
  &:hover{
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
  }
  h4 {
    font-family: 'Conv_CASTELAR';
    font-weight:normal;
    margin-top: 1.4rem;
    a {
      color: #5C3327;
      text-decoration:none;
      font-size:1.8rem;
      &:hover{
        color: #2B1109;
      }
    }
  }
  h5 {
    font-family: 'Conv_majalla';
    font-weight:normal;
    font-size:1.8rem;
  }
  .info {
    padding: 0 2rem;
  }
`;


const Listings = () => (
  <StaticQuery
    query={LISTINGS_QUERY}
    render={({allMarkdownRemark}) => (
      <>
        <section>
            <VillasContainer className="container col-2">
            {allMarkdownRemark.edges.map(edge => {
              const route = (link) => {
                link.split(' ').join('-').toLowerCase()
              }
              return (
              <div key={edge.node.frontmatter.title}>
                  <Card>
                    <div className="imageContainer">
                      <Img fluid={edge.node.frontmatter.image.childImageSharp.fluid}/>
                    </div>
                    <div className="info">
                      <h4>
                        <Link aria-label={edge.node.frontmatter.title} to={`/villas/${edge.node.frontmatter.title.split(' ').join('-').toLowerCase()}`}> {edge.node.frontmatter.title} </Link>
                      </h4>
                      <h5>Size: {edge.node.frontmatter.size}</h5>
                    </div>
                    <ViewDetails>
                      <Link aria-label={edge.node.frontmatter.title} to={`/villas/${edge.node.frontmatter.title.split(' ').join('-').toLowerCase()}`}>
                        <ButtonLink >View Details</ButtonLink>
                      </Link>
                    </ViewDetails>
                  </Card>

              </div>
              )
            })}
            </VillasContainer>
        </section>
      </>
    )}
  />
)

export default Listings