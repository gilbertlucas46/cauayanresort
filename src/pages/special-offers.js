import React from "react"
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"


const SpecialOffers_QUERY = graphql`
  query SpecialOffersPage{
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/pages/main/"}}) {
      edges {
        node {
          frontmatter {
            title
            offers {
              title
              desc
            }
          }
        }
      }
    }
  }
`;

const SpecialOffersContainer = styled.div`
  .intro {
    p{
      text-align:center;
    }
  }
`;

const SpecialOffersContent = styled.div`
  p {
    text-align:center;
  }
  h3 {
      color: #5C3327;
      text-align:center;
      font-size: 2rem;
      margin-top: 2rem;
    }
    strong {
      margin-top:1.5rem;
      color: #5C3327;
      &:first-of-type{
        margin-top:0;
      }
    }
`;


const SpecialOffers = ({location}) => (
  <StaticQuery
  query={SpecialOffers_QUERY}
  render={({allMarkdownRemark}) => (
    <Layout location={location}>
      <article>
        <SpecialOffersContainer className="container">
          {allMarkdownRemark.edges.map(edge => {
            const items = edge.node.frontmatter.offers;
            return (
              <>
              
                <SpecialOffersContent>
                  <h3>{items.title}</h3>
                  <p dangerouslySetInnerHTML = {{ __html: items.desc }}/>
                </SpecialOffersContent>
              </>
            )
          })} 
        </SpecialOffersContainer>
      </article>
    </Layout>
  )}
  />
)

export default SpecialOffers
