import React from 'react'
import styled from 'styled-components'


const ButtonContainer = styled.button`
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


const Button = ({children}) => (
  <ButtonContainer>{children}</ButtonContainer>
)

export default Button
