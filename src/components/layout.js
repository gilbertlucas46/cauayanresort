import React from "react"
import { Spring } from 'react-spring/renderprops'
import PropTypes from "prop-types"
import styled from 'styled-components'

import Header from "./header"
import'./utils/fonts.css'
import '../components/utils/layout.scss'


const MainLayout = styled.main`
  max-width:100%;
`;

const Layout = ({ children,location }) => {
  return (
    <div>
    <Header/>
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
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
Layout.defaultProps = {
  location: {},
}

export default Layout
