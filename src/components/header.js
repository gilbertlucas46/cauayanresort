import { StaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'


const HeaderWrapper = styled.div`
  display:block;
`;
const HeaderContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  background-color:#5C3327;
  
  @media (min-width:992px) {
    min-height:6.5rem;
  }
  .mainNav {
    display: flex;           /* establish flex container */
    flex-direction: column;  /* make main axis vertical */
    justify-content: center; /* center items vertically, in this case */
    align-items: center; 
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
            span { color:white}
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



const Header = ({ menuLinks }) => (
  <StaticQuery
  query={graphql`
    query HeadingQuery {
      markdownRemark{
        frontmatter {
          topnav {
            title
          }
        }
      }
    }
  `}
  render={data => (
    <HeaderWrapper>
      <HeaderContent> 
        <div className="logo">
          test
        </div>
        <div className="mainNav">
          <nav>
            <ul>
              {data.markdownRemark.frontmatter.topnav.map(nav => (
                <li key={nav.title.split(' ').join('-').toLowerCase()}>
                  <Link 
                  to={nav.title.split(' ').join('-').toLowerCase()} activeClassName="active" 
                  ria-label={`links to ${nav.title}`} 
                  alt={nav.name}>
                  <span>{nav.title}</span>
                  </Link>
                </li>
              ))}
              <li>
              <a href={`https://redirect.fastbooking.com/DIRECTORY/dispoprice.phtml?showPromotions=1&Hotelnames=ASIAPHHTLCauayanIsla&Clusternames=ASIAPHHTLCauayanIsla`} aria-label='links to Booking page' alt="Book Now">Book Now</a></li>
            </ul>
          </nav>
        </div>
      </HeaderContent>
    </HeaderWrapper>
  )}
/>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
