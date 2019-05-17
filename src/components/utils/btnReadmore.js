import React from 'react'
import styled from 'styled-components'

import ChevronRight from '../../images/icons/chevron-right.inline.svg'

const Button = styled.span`
  color:white;
  background-color:#5C3327;
  display:block;
  width:243px;
  line-height: 3.6rem;
  text-align:center;
  font-size: 1.8rem;
  border-radius: 4px;
  text-decoration:none;
  font-family: 'Conv_majalla';
`;

const SVGColor = {
  fill:'white',
  width: '12px'
}

const btnReadmore = () => (
  <Button>Read more <ChevronRight style={SVGColor}/></Button>
)

export default btnReadmore
