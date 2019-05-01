import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

const TopContactWrapper = styled.div`
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

const topContact = () => {
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
            }
          }
        }
      `}
      render={data => (
        <TopContactWrapper>
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
        </TopContactWrapper>
      )}
    />
  )
}



export default topContact