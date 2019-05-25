import React from 'react'
import styled from 'styled-components'
import Img from '../image'

import ChevRight from '../../images/icons/chevron-right.inline.svg'

const BCI = styled.div`
  position:relative;
  margin-bottom: 6rem;
  &:before{
    content: '';
    background: rgb(0,0,0);
    background: linear-gradient(0deg,rgba(0,0,0,0.5018382352941176) 0%,rgba(255,255,255,0) 100%);
    height: 80%;
    width: 100%;
    position: absolute;
    z-index: 1;
    bottom: 0;
  }
  h1 {
    position:absolute;
    bottom: 4rem;
    z-index: 1;
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;
    text-align: center;
    color: white;
  }
  .breadcrumbs {
    padding: 0;
    position: absolute;
    bottom: .8rem;
    z-index: 1;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    text-align: center;
    svg {
      max-width: .5rem;
      fill: white;
      margin: 0 .8rem;
    }
    li {
      list-style-type:none;
      display:inline-block;
      text-align:center;
      color:white;
      text-transform:capitalize;
      font-size: 1.5rem;
      font-family: 'Conv_majalla';

      a {
        color:white;
        text-decoration:none;
        text-transform:capitalize;
      }
    }
  }
`;

const BreadCrumbs = ({location}) => {
  return (
    <BCI location={location}>
      <div className="desktopView">
      <Img src={(location.pathname.includes('villas/'))
      ? 'bc-our-villas.jpg'
      : `bc-${location.pathname.replace(/villas\/|\/+/g,'')}.jpg`
      } 
      alt="our-villas"/>
      </div>
      <div className="tabletView">
        <Img src={(location.pathname.includes('villas/'))
        ? 'bc-our-villas-tablet.jpg'
        : `bc-${location.pathname.replace(/villas\/|\/+/g,'')}-tablet.jpg`
        } 
        alt="our-villas"/>
      </div>  
      <div className="mobileView">
        <Img src={(location.pathname.includes('villas/'))
        ? 'bc-our-villas-mobile.jpg'
        : `bc-${location.pathname.replace(/villas\/|\/+/g,'')}-mobile.jpg`
        } 
        alt="our-villas"/>
      </div>
      <h1>{location.pathname.replace(/villas\/+|-|\/+/g,' ')}</h1>
      <ul className="breadcrumbs">
        <li><a href="/">Home</a></li>
        <ChevRight/>
        <li>{location.pathname.replace(/villas\/+|-|\/+/g,' ')}</li>
      </ul>
    </BCI>  
  ) 
}

export default BreadCrumbs
