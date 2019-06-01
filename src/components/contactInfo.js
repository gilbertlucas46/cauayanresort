import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

//icons
import Mail from '../images/icons/mail.inline.svg'
import Phone from '../images/icons/phone.inline.svg'
import Pin from '../images/icons/pin.inline.svg'


const ContactInfoContainer = styled.div`
  .col.contact{
    li {
      padding-left:38px;
      transition: all ease-out  0.2s;
      svg {
        max-width:22px;
        transition: all ease-out  0.5s;
      }
      &:hover{
          padding-left:48px;
          svg {
            left: 10px;
          }
        }
    }
  }
  ul {
    padding: 0;
    margin:0;
    li {
      list-style-type:none;
      text-align:left;
      padding-left: 30px;
      position:relative;
      transition: all ease-out 0.2s;
      color:black;
      font-family: 'Conv_majalla';
      text-decoration:none;
      font-size:1.4rem;
      margin-bottom: 1.5rem;
      @media (max-width:992px) {
        font-size:1.6rem;
        line-height:1.8rem;
      }
      &:hover{
        padding-left:40px;
        svg {
          left: 10px;
        }
      }
      svg {
        left:0;
        top:0;
        bottom:0;
        margin:auto;
        position:absolute;
        transition: all ease-out  0.5s;
        
      }
      a {
       
        font-family: 'Conv_majalla';
        text-decoration:none;
        font-size:1.4rem;
        @media (max-width:992px) {
          font-size:1.6rem;
          line-height:1.8rem;
        }
        &:visited{
          color:white;
        }
      }
    }
  }
`;


const INFO_QUERY = graphql`
   query INFO_QUERY {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/navigation/navigation/"}}) {
      edges {
        node {
          frontmatter {
            footernav {
              contact{
                add
                phone{
                  num
                }
                email
              }
            }
          }
        }
      }
    }
  }
`;

const ContactInfo = () => {
  return (
    <StaticQuery
    query={INFO_QUERY}
    render={({allMarkdownRemark}) => (
      <>
        {allMarkdownRemark.edges.map(edge =>  {
          const footNav = edge.node.frontmatter.footernav[0];
          return (
            <ContactInfoContainer key="contact-inf">
              <div className="col contact">
                <h5 className="title">CONTACT DETAILS</h5>
                <ul>
                  <li><Pin/>{footNav.contact[0].add}</li>
                  {footNav.contact.map(nums => {
                    return (
                      nums.phone.map(contactnum => {
                        return (
                          <li key={contactnum.num}><Phone/>{contactnum.num}</li>
                        )
                      })
                    )
                  })}
                  <li><Mail/>{footNav.contact[0].email}</li>
                </ul>
              </div>
            </ContactInfoContainer>
          )
        })}
      </>
    )}/>
  )
}


export default ContactInfo
