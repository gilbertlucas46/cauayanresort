import React from 'react'
import styled from 'styled-components'

const BCI = styled.div`

`;

const BreadCrumbs = ({location}) => {
  return (
    <BCI>
      <h1>{location.pathname.replace(/villas|-|\/+/g,' ')}</h1>
      <ul className="breadcrumbs">
        <li><a href="/">Home</a></li>
        <li>{location.pathname.replace(/^\/+/g, '')}</li>
      </ul>
    </BCI>
  )
}

export default BreadCrumbs
