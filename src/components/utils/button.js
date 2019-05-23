import React from 'react'
import styled from 'styled-components'


const ButtonContainer = styled.button`
  color:white;
  background-color:#5C3327;
  display:block;
  line-height: 3.6rem;
  text-align:center;
  font-size: 1.8rem;
  border-radius: 4px;
  text-decoration:none;
  font-family: 'Conv_majalla';
`;

const ButtonLinkContainer = styled.span`
  color:white;
  background-color:#5C3327;
  display:block;
  line-height: 3.6rem;
  text-align:center;
  font-size: 1.8rem;
  border-radius: 4px;
  text-decoration:none;
  font-family: 'Conv_majalla';
  transition: all .2s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: #2B1109;
    transform: scale(1.1)
  }
`;


export const Button = ({children}) => (
  <ButtonContainer>{children}</ButtonContainer>
)
export const ButtonLink = ({children}) => (
  <ButtonLinkContainer>{children}</ButtonLinkContainer>
)


