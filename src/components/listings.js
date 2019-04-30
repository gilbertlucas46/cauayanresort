import React from "react"
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from "gatsby"

import '../components/utils/layout.css'

const LISTINGS_QUERY = graphql`
    query VillasListings {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                        slug
                    }
                }
            }
        }
    }
`;

const ListingsList = styled.ul`
  
`;

const Listings = () => (
  <StaticQuery
    query={LISTINGS_QUERY}
    render={({allMarkdownRemark}) => (
      <>
        <aside>
            <h3>Listings</h3>
            <ListingsList>
            {allMarkdownRemark.edges.map(edge => (
                <li key={edge.node.frontmatter.slug}>
                <Link to={`/villas/${edge.node.frontmatter.slug}`}>
                    {edge.node.frontmatter.title}
                </Link>
                </li>
            ))}
            </ListingsList>
        </aside>
      </>
    )}
  />
)

export default Listings

