import React from "react"
import styled from 'styled-components'

import { StaticQuery, graphql } from "gatsby"

import Collapse from 'rc-collapse'
import 'rc-collapse/assets/index.css'

import Layout from "../components/layout"


const FAQ_QUERY = graphql`
  query FAQPage{
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/pages/main/"}}) {
      edges {
        node {
          frontmatter {
            title
            faq {
              faqs{
                desc
                question
              }
            }
          }
        }
      }
    }
  }
`;

const FAQContainer = styled.div`
  .intro {
    p{
      text-align:center;
    }
  }
`;
const FAQContent = styled.div`
  .rc-collapse{
    display: grid;
    grid-gap: 20px;
    border: 0;
    .arrow{
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;
      border-left: 10px solid #666;
    }
    .rc-collapse-item-active{
      .arrow{
        top: 5px;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-top: 10px solid #666;
      }
    }
  }
`;

const Panel = Collapse.Panel;

const FAQ = ({location}) => (
  <StaticQuery
  query={FAQ_QUERY}
  render={({allMarkdownRemark}) => (
    <Layout location={location}>
      <article>
        <FAQContainer className="container">
          {allMarkdownRemark.edges.map(edge => {
            const items = edge.node.frontmatter.faq;
            return (
              <>
                <FAQContent>
                  <Collapse accordion={true}>
                    {items.faqs.map(faq => (
                      <Panel header={faq.question} headerClass="tabHeader">{faq.desc}</Panel>
                    ))}
                  </Collapse>
                </FAQContent>
              </>
            )
          })} 
        </FAQContainer>
      </article>
    </Layout>
  )}
  />
)

export default FAQ
