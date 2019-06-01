import React from "react"
import styled from 'styled-components'

import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"


const Terms_QUERY = graphql`
  query TermsPage{
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/pages/main/"}}) {
      edges {
        node {
          frontmatter {
            title
            tandc{
              title
              desc
            }
          }
        }
      }
    }
  }
`;

const TermsContainer = styled.div`
  .intro {
    p{
      text-align:center;
    }
  }
`;

const TermsContent = styled.div`
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


const Terms = ({location}) => (
  <StaticQuery
  query={Terms_QUERY}
  render={({allMarkdownRemark}) => (
    <Layout location={location}>
      <article>
        <TermsContainer className="container">
          {allMarkdownRemark.edges.map(edge => {
            const items = edge.node.frontmatter.tandc;
            return (
              <>
              
                <TermsContent>
                  <h3>{items.title}</h3>
                  <p dangerouslySetInnerHTML = {{ __html: items.desc }}/>
                </TermsContent>
              </>
            )
          })} 
        </TermsContainer>
      </article>
    </Layout>
  )}
  />
)

export default Terms
