import React from "react"
import {useSpring, animated} from 'react-spring'
import { StaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import styled from 'styled-components'

const NavWrapper = styled.div`
    display:block;
    .logo{
      max-width:84px;
      position:relative;
    }
    .logo > div {
      margin: 1.155rem 0;
    }
  `;
  const NavContent = styled.div`
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

const navigation = () => {
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
      query NavQuery {
        markdownRemark{
          frontmatter {
            title
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
        </NavContent>
      </NavWrapper>
    )}
  />
  )
}


export default navigation