import React, { Component } from 'react'
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default class VillasLayout extends Component {
  render() {
      const {allMarkdownRemark} = this.props.data;
      const { location } = this.props;
    return (
      <Layout location={location} >
        {allMarkdownRemark.edges.map(nodes => {
          return (
            <div className="container">
              {nodes.node.frontmatter.title}
            </div>
          )
        })}
      </Layout>
    )
  }
}
export const query = graphql`
   query PostQuery($slug: String!) {
     allMarkdownRemark(filter: {
      frontmatter:  { title: { eq:$slug}
      }}){
    edges{
      node{
        frontmatter {
          title
          desc
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
`