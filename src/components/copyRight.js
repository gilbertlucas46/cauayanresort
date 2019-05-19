import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'


const CopyContainer = styled.div`
  background-color:#D6D1CA;
  padding: 3rem 0;
  div {
    text-align:center;
    color:#4B858E;
    margin-top:0.5rem;
    font-family: 'Conv_majalla';
    font-size:1.4rem;
  }
  ul {
    padding: 0;
    margin: 0;
    grid-template-rows: 1fr;
    grid-template-columns: auto;
    grid-auto-flow: column;
    text-align: center;
    li{
      list-style-type:none;
      display:inline-block;
      padding: 0 0.8rem;
      img{
        transition: all ease-in 0.2s;
        &:hover{
          filter: gray;
          -webkit-filter: grayscale(1);
          filter: grayscale(1); 
          transform: scale(1.1);
        }
      }
    }
  }
`;

const COPY_QUERY = graphql`
   query COPY_QUERY {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/navigation/navigation/"}}) {
      edges {
        node {
          frontmatter {
            social{
              name
              icons {
                publicURL
              }
            }
          }
        }
      }
    }
  }
`;

const CopyRight = () => {
  return (
    <StaticQuery
    query={COPY_QUERY}
    render={({allMarkdownRemark}) => (
      <>
        {allMarkdownRemark.edges.map(edge =>  {
          const links = edge.node.frontmatter.social
          console.log(links)
          return (
            <CopyContainer key="copy">
              <ul>
                {links.map(names => (
                  <li key={names.name}>
                    <a href={names.name}>
                      <img src={`${names.icons.publicURL}`} alt=""/>
                    </a>
                  </li>
                ))}
              </ul>
              <div>
                © {new Date().getFullYear()}, Cauayan Resort. All Rights Reserved
              </div>
            </CopyContainer>
          )
        })}
       
      </>
    )}/>
  )
}


export default CopyRight
