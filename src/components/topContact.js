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
    @media (max-width:992px) {
      display:none;
    }
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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 17"><path d="M13.768 10.492c.1.1.2.3.2.5v2.3c0 .2-.1.3-.2.5-.1.1-.3.2-.5.2-3.1 0-5.8-1.1-8-3.3s-3.3-4.9-3.3-8c0-.2.1-.3.2-.5.1-.1.3-.2.5-.2h2.3c.2 0 .3.1.5.2.1.1.2.3.2.5 0 .8.1 1.6.4 2.4.1.3 0 .5-.2.7l-1.4 1.4a10.38 10.38 0 0 0 4.4 4.4l1.5-1.5c.1-.2.4-.2.7-.2.8.2 1.6.4 2.4.4 0 .1.2.1.3.2z" fill="#4b858e" /></svg>
                  </span>
                  {phone.num}
                  </li>
                ))}
                <li>
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19"><path d="M2.2 13.5V5l4.6 3.5-2.4 2.7.1.1 2.8-2.5L9 10.1l1.7-1.3 2.8 2.5.1-.1-2.4-2.7L15.8 5v8.5H2.2zM9 9.4L2.5 4.5h12.9L9 9.4z" fill="#4b858e" /></svg>
                  </span>
                  {data.markdownRemark.frontmatter.topcontact.email}
                </li>
                <li>
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 17"><path d="M12.5 5.5c0 1-.4 2.4-1.2 4.1s-1.5 2.9-2 3.6L8 15l-1.1-1.6c-.8-1.1-1.5-2.4-2.2-4-.8-1.5-1.2-2.9-1.2-3.9 0-1.2.4-2.3 1.3-3.2S6.8 1 8 1s2.3.4 3.2 1.3 1.3 1.9 1.3 3.2zm-3 0c0-.4-.1-.8-.4-1S8.4 4 8 4s-.8.2-1 .5-.4.6-.4 1 .1.8.4 1 .6.5 1 .5.8-.1 1-.4.5-.7.5-1.1z" fill="#4b858e" /></svg>  
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