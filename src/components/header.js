import React from "react"
import {useSpring, animated} from 'react-spring'
import { StaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import PropTypes from "prop-types"
import styled from 'styled-components'


const HeaderWrapper = styled.div`
  display:block;
  .logo{
    max-width:84px;
    position:relative;
  }
  .logo > div {
    margin: 1.155rem 0;
  }
  .topContact {
    background-color: #D6D1CA;
    @media (min-width:1440px) {
      padding: 0 5rem;
    }
    @media (min-width:992px) and (max-width:1439px) {
      padding: 0 3rem;
    }
    
    ul {
      margin:0;
      li {
        display:inline-block;
        list-style-type:none;
        position:relative;
        padding-left: 15px;
        color: #4B858E;
        margin: 3px 0;
        margin-left: 20px;
        font-family: 'Conv_majalla';
        svg {
          max-height: 17px;
          display:inline;
          position:absolute;
          left:-10px;
          width: 17px;
          top:0;
          bottom:0;
          margin:auto;
        }
      }
    }
  }
`;
const HeaderContent = styled.div`
  display: grid;
  background-color:#5C3327;
  position:relative;
  overflow:hidden;
  min-height:6.5rem;
  @media (min-width:1551px) {
    grid-template-columns: 1fr 3fr; 
  }
  @media (min-width:1440px) and (max-width:1550px) {
    grid-template-columns: 1fr 6fr; 
  }
  @media (min-width:1200px) and (max-width:1439px) {
    grid-template-columns: 1fr 6fr; 
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
  .mainNav {
    display: flex;           /* establish flex container */
    flex-direction: column;  /* make main axis vertical */
    justify-content: center; /* center items vertically, in this case */
    align-items: center; 
    position:relative;
    overflow:hidden;
    nav {
      width:100%;
      ul {
        width:100%;
        @media (min-width:992px) {
          flex-direction: row;
          justify-content: space-between;
        }
        list-style: none;
        margin: 0 auto;
        width: 100%;
        max-width: 1600px;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        li {
          list-style-type:none;
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


const Header = ({ menuLinks }) => {
   const fade = useSpring({
     from: {
       opacity:0
     },
     to: {
       opacity:1
     }
   });
   console.log(fade)
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          markdownRemark{
            frontmatter {
              title
              topcontact {
                add
                email
                phone {
                  num
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
        <HeaderWrapper>
          <div className="topContact">
            <ul>
                {data.markdownRemark.frontmatter.topcontact.phone.map(phone => (
                  <li key={phone.num}>
                  <span>
                  <svg viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(-44.532 -8.208)" data-name="Group 2">
                    <text transform="translate(44.532 24.208)" fill="#4b858e" fontFamily="cauayan" fontSize="16">
                    <tspan x="0" y="0">e</tspan>
                    </text>
                    </g>
                  </svg>
                  </span>
                  {phone.num}
                  </li>
                ))}
                <li>
                  <span>
                  <svg viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
                    <text transform="translate(0 18)" fill="#4b858e" fontFamily="cauayan" fontSize="18">
                    <tspan x="0" y="0">y</tspan>
                    </text>
                  </svg>
                  </span>
                  {data.markdownRemark.frontmatter.topcontact.email}
                </li>
                <li>
                  <span>
                  <svg viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                    <text transform="translate(0 16)" fill="#4b858e" fontFamily="cauayan" fontSize="16">
                    <tspan x="0" y="0">g</tspan>
                    </text>
                  </svg>  
                  </span>
                  {data.markdownRemark.frontmatter.topcontact.add}
                </li>
            </ul>
          </div>
          <HeaderContent> 
            <div className="logo">
            <Img fluid={data.markdownRemark.frontmatter.cauayan.childImageSharp.fluid} />
            </div>
            <div className="mainNav">
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
            </div>
          </HeaderContent>
        </HeaderWrapper>
      )}
    />
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
