import React, {useState} from "react"
import {useSpring, animated} from 'react-spring'
import { StaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import styled from 'styled-components'

const NavWrapper = styled.div`
    display:block;
    a.bookNow {
      display: block;
      position: fixed;
      z-index: 999;
      width: 52px;
      height: 215px;
      right: 0;
      bottom: 0;
      top: 0;
      margin: auto;
      div {
        box-shadow: 0 0 30px #00000066;
        border-radius: 8px 0 0 8px;
      }
      @media(max-width:767px){
        width:35px;
      }
    }
    .logo{
      position:relative;
      @media (max-width:991px){
        margin-left:2rem;
        max-width: 48px;
      }
      @media (min-width:992px){
        max-width:84px;
      }
    }
    .logo > div {
      margin: 1.155rem 0;
    }
  `;
  const NavContent = styled.div`
    background-color:#5C3327;
    position:relative;
    overflow:hidden;
    @media (min-width:992px){
      min-height:6.5rem;
    }
    @media (max-width:991px){
      min-height:5rem;
    }
    @media (max-width:1199px){
      padding-right:0 !important;
    }
    @media (min-width:1551px) {
      display: grid;
      grid-template-columns: 1fr 2fr; 
    }
    @media (min-width:1440px) and (max-width:1550px) {
      display: grid;
      grid-template-columns: 1fr 6fr; 
    }
    @media (min-width:1200px) and (max-width:1439px) {
      grid-template-columns: 1fr 6fr; 
      display: grid;
    }
    &:before {
    content: '';
      background-color: #6C3A2F;
      height: 100%;
      display: block;
      position: absolute;
      top: 0;
      -ms-transform: skewX(-20deg);
      -webkit-transform: skewX(-20deg);
      transform: skewX(-20deg);
      right: -5rem;
      @media (min-width:1440px) {
        width: 14.5rem;
      }
      @media (min-width:1200px) and (max-width:1439px) {
        width: 12.5rem;
      }
    }
    @media (min-width:1440px) {
      padding-right: 2rem;
      padding-left: 5rem;
    }
    @media (min-width:992px) and (max-width:1439px) {
      padding-right: 1rem;
      padding-left: 3rem;
    }
    @media (min-width:992px) and (max-width:1439px) {
      padding-right: 1rem;
      padding-left: 3rem;
    }
    .menu-button {
      position: absolute;
      right: 2rem;
      top: 0;
      bottom: 0;
      z-index: 999;
      font-family: 'Conv_CASTELAR';
      color:white;
      background-color: transparent;
      border: 0;
      outline: none;
      @media (min-width:1200px) {
        display: none;
      }
    }
    .mainNav {
      display: flex;           /* establish flex container */
      flex-direction: column;  /* make main axis vertical */
      justify-content: center; /* center items vertically, in this case */
      align-items: center; 
      position:relative;
      overflow:hidden;
      @media (min-width:1200px) {
        transform: none !important;
      }
      @media (max-width:1199px){
        position: fixed;
        height: 100vh;
        z-index: 999;
        background-color: #5C3327;
        width: 100%;
        left: 0;
        top: 0;
      }
      nav {
        width:100%;
        ul {
          width:100%;
          list-style: none;
          margin: 0 auto;
          width: 100%;
          max-width: 1600px;
          padding: 0;
          @media (min-width:1200px) {
            display: flex;
            flex-direction: row;
            justify-content: space-between; 
          }
          @media (max-width:1199px) {
            text-align:center;
          }
          li {
            list-style-type:none;
            @media (max-width:767px){
              margin-bottom:2.5rem;
              a {
                span {
                  font-size: 1.5rem !important;
                }
              }
            }
            a {
              position:relative;
              color:white;
              text-decoration: none;
              text-transform:uppercase;
              font-family: 'Conv_CASTELAR';
              span { 
                color:white;
                font-size: 0.9rem;
              }
            }
            a.active {
              &:before {
                height:2px;
                width:100%;
                content:'';
                background-color:white;
                position:absolute;
                bottom:-10px;
                left:0;
                right:0;
                margin:auto;
              }
            }
          }
        }
      }
    }
`;

const navigation = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const navAnimation = useSpring({
    transform: isNavOpen ? `translate3d(0,0,0)` : `translate3d(100%,0,0)`,
  })
  const fade = useSpring({
    from: {
      opacity:0
    },
    to: {
      opacity:1
    }
  });

  return (
  <StaticQuery
    query={graphql`
      query NavQuery {
        markdownRemark{
          frontmatter {
            title
            bookbutton{
                childImageSharp{
                  fluid(maxWidth:52){
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            cauayan {
              childImageSharp{
                fluid(maxWidth:100){
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            topnav {
              link
              title
            }
          }
        }
      }
    `}
    render={data => (
      <NavWrapper>
        <NavContent> 
          <div className="logo">
          <Img fluid={data.markdownRemark.frontmatter.cauayan.childImageSharp.fluid} />
          </div>
          <animated.div className="mainNav" style={navAnimation}>
            <nav>
              <ul>
                {data.markdownRemark.frontmatter.topnav.map(nav => (
                  <li key={nav.link}>
                    <Link 
                    to={nav.link} activeClassName="active" 
                    ria-label={`links to ${nav.title}`} 
                    alt={nav.name}>
                    <span>{nav.title}</span>
                    </Link>
                  </li>
                ))}
                <li>
                <a href={`https://redirect.fastbooking.com/DIRECTORY/dispoprice.phtml?showPromotions=1&Hotelnames=ASIAPHHTLCauayanIsla&Clusternames=ASIAPHHTLCauayanIsla`} aria-label='links to Booking page' alt="Book Now"> <span>Book Now</span> </a></li>
              </ul>
            </nav>
          </animated.div>
          <button onClick={() => setNavOpen(!isNavOpen)} className='menu-button'>
            MENU
          </button>
        </NavContent>
        <a 
          href={`https://redirect.fastbooking.com/DIRECTORY/dispoprice.phtml?showPromotions=1&Hotelnames=ASIAPHHTLCauayanIsla&Clusternames=ASIAPHHTLCauayanIsla`} 
          aria-label='links to Booking page' 
          className="bookNow"
          alt="Book Now">
          <Img fluid={data.markdownRemark.frontmatter.bookbutton.childImageSharp.fluid} />
        </a>
      </NavWrapper>
    )}
  />
  )
}


export default navigation



