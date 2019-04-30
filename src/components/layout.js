import React from "react"
import { Spring } from 'react-spring/renderprops'
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Header from "./header"


const MainLayout = styled.main`
  max-width:100%;
 
`;



const Layout = ({ children,location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
          site {
            siteMetadata {
              menuLinks {
                name
                link
              }
            }
          }
          allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/navigation/"}}) {
            edges {
              node {
                frontmatter {
                  title
                  topnav {
                    title
                  }
                }
              }
            }
          }
        }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} menuLinks={data.site.siteMetadata.menuLinks}  socialChannels={data.site.siteMetadata.socialChannels} />
        <MainLayout>
          <Spring
          delay={300}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          >
          {({opacity}) =>(
            <div style={{opacity}}>
            {children}
            </div>
          )}
          </Spring>
        </MainLayout>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
Layout.defaultProps = {
  location: {},
}

export default Layout
