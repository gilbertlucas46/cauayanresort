import React, { Component } from 'react'
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default class VillasLayout extends Component {
  render() {
      const {markdownRemark} = this.props.data;
    return (
      <Layout>
        <div>
        </div>
      </Layout>
    )
  }
}
export const query = graphql`
   query PostQuery($slug: String!) {
    markdownRemark(frontmatter: {
      title: {
        eq: $slug
      }
    }) {
      html
      frontmatter {
        title
      }
    }
  }
`


