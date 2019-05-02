import React from "react"
import { Spring } from 'react-spring/renderprops'
import PropTypes from "prop-types"
import styled from 'styled-components'
import {Link } from "gatsby"

import Header from "./header"
import'./utils/fonts.css'
import '../components/utils/layout.css'


const MainLayout = styled.main`
  max-width:100%;
  .fixedBook {
    height: 0px;
    width: 85px;
    position: fixed;
    right: 9px;
    top: 55%;
    z-index: 1000;
    transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
    a {
      display: block;
      background: #5C3327;
      height: 52px;
      width: 170px;
      text-align: center;
      font-size: 1.2rem;
      line-height: 3.5rem;
      text-decoration: none;
      font-family: 'Conv_CASTELAR';
      color: white;
      padding-right: 20px;
      border-radius: 6px 6px 0 0;
      box-shadow: 0 0 18px #0000007a;
      @media (max-width:767px){
        line-height: 4.2rem;
      }
    }
    svg {
      max-width: 0.5rem;
      position: absolute;
      right: -70px;
      bottom: -31px;
      transform: rotate(90deg);
      -webkit-transform: rotate(90deg);
      -moz-transform: rotate(90deg);
      -o-transform: rotate(90deg);
      filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
      @media (max-width:767px){
        right: -64px;
      }
    }
  }
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
      <div className="fixedBook">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.7 17.9"><path d="M9.6 17.9L0 8.8 9.6 0l2 2.2-7.2 6.7 7.3 6.8z" fill="#fff"/></svg>
        <a 
          href={`https://redirect.fastbooking.com/DIRECTORY/dispoprice.phtml?showPromotions=1&Hotelnames=ASIAPHHTLCauayanIsla&Clusternames=ASIAPHHTLCauayanIsla`} 
          aria-label='links to Booking page'
          
          alt="Book Now"> 
          
          <span>
            Book Now
          </span> 
        </a>
      </div>
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
