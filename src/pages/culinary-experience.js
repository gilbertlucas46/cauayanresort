import React from "react"

import Layout from "../components/layout"
import styled from 'styled-components'


const CulinaryContainer = styled.div`

`;

const CulinaryExperience = ({location}) => (
  <Layout location={location}>
    <article>
      <CulinaryContainer className="container">
      </CulinaryContainer>
    </article>
  </Layout>
)

export default CulinaryExperience
