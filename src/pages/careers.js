import React from "react"
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

import Pin from '../images/icons/pin.inline.svg'

const Careers_QUERY = graphql`
  query CareersPage{
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/pages/main/"}}) {
      edges {
        node {
          frontmatter {
            careers{
              tcareers{
                jname
                loc
              }
            }
          }
        }
      }
    }
  }
`;
 
const CareersContainer = styled.div`
  .intro {
    p{
      text-align:center;
    }
  }
`;
const CareersContent = styled.div`
  .career{
    border-left: 10px solid #5C3327;
    padding: 1rem 1.4rem;
    background-color: #FAFCFC;
    @media (max-width: 767px) {
      margin-bottom: 1rem; 
    }
    h3 {
      margin-bottom:  10px;
      color: #5C3327;
    }
    p {
      margin-bottom: 0;
      position: relative;
      padding-left: 20px;
      svg {
        position: absolute;
        left: 0;
        max-width: 13px;
        margin: auto;
        top: 0;
        bottom: 0;
        path {
          fill: #8C9091;
        }
      }
    }
    p,h3 {
      display:block;
      width: 100%;
    }
  }
  .career > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
  }
  @media(min-width: 768px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }
  .direction{
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
  }
`;


const Careers = ({location}) => (
  <StaticQuery
  query={Careers_QUERY}
  render={({allMarkdownRemark}) => (
    <Layout location={location}>
      <article>
        <CareersContainer className="container">
          {allMarkdownRemark.edges.map(edge => {
            const items = edge.node.frontmatter.careers;
            return (
              <>
                <CareersContent>
                  {items.tcareers.map(career => (
                    <>
                      <div className="career">
                        <div><h3>{career.jname}</h3>
                        <p><Pin/>{career.loc}</p></div>
                      </div>
                    </>
                  ))}
                </CareersContent>
              </>
            )
          })} 
        </CareersContainer>
      </article>
    </Layout>
  )}
  />
)

export default Careers
