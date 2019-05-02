import React from "react"
import PropTypes from "prop-types"

import Navigation from './navigation'
import TopContact from './topContact'

const Header = () => (
  <div>
      <TopContact/>
      <Navigation/>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header