import React, { Component } from 'react'
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default class VillasLayout extends Component {
  render() {
      const {allMarkdownRemark} = this.props.data;
      const { location } = this.props;
      console.log(location)
    return (
      <Layout location={location}>
        <div>
         
        </div>
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
        frontmatter{
          title
        }
      }
    }
  }
}
`


