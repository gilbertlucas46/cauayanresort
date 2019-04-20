import React, { Component } from 'react'
import Layout from "../components/layout"
import { graphql } from "gatsby"

 class VillasLayout extends Component {
  render() {
      const {markdownRemark} = this.props.data;
    return (
      <Layout>
        <div dangerouslySetInnerHTML={ 
            {
                __html: markdownRemark.html
            }
        }/>
      </Layout>
    )
  }
}
export const query = graphql`
   query PostQuery($slug: String!) {
    markdownRemark(frontmatter: {
      slug: {
        eq: $slug
      }
    }) {
      html
      frontmatter {
        title
        slug
      }
    }
  }
`


export  default VillasLayout ;
