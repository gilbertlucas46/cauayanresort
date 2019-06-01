import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import {Button} from '../components/utils/button'

//icons
import Pin from '../images/icons/pin.inline.svg'
import Phone from '../images/icons/phone.inline.svg'
import Email from '../images/icons/mail.inline.svg'
//Social
import Facebook from '../images/icons/social/facebook.inline.svg'
import Instagram from '../images/icons/social/instagram.inline.svg'
import Linkedin from '../images/icons/social/linkedin.inline.svg'
import Tripadvisory from '../images/icons/social/tripadvisory.inline.svg'

const ContactUsContainer = styled.div`
  
`;
const ContactUsContent = styled.div`
  @media(min-width: 768px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }
  form {
    button {
      width:100%;
      margin-top: 1rem;
    }
    label {
      margin-bottom: 1rem;
      display: block;
      color: #5C3327;
      font-family: 'Conv_majalla';
      font-size: 1.8rem;
    }
    input {
      height: 3rem;
      margin-bottom: 1rem;
    }
    input, textarea {
      width: 100%;
      border-radius: 4px;
      border-style: none;
      border: 1px solid #D6D1CA;
      text-indent: 1rem;
    }
    textarea {
      padding: 0.8rem 0;
      max-height: 12.4rem;
    }
  }
  h4 {
    font-size: 1.6rem;
    color: #5C3327;
    @media (max-width:767px) {
      text-align:center;
    }
  }
  .ContactUs{
    ul {
      &:first-of-type {
        border-bottom: 2px solid #D6D1CA;
        margin-bottom: 2rem;
        padding-bottom: 1.6rem;
      }
      li {
        @media (max-width:767px) {
          line-height: 1.6rem;
        }
      }
    }
    .Social{
      margin-top: 2rem;
      li {
        padding: 0;
        margin-left: 0;
        display: inline-block;
        margin-right: 1rem;
        
        svg {
          min-width: 28px;
          min-height: 28px;
          position: relative;
          left: 0;
          path {
            fill: #5C3327;
          }
        }
      }
    }
  }
  ul {
    margin:0;
    padding:0;
    li {
      list-style-type:none;
      position:relative;
      padding-left: 15px;
      color: #1F1F1F;
      margin-bottom: 12px;
      margin-left: 15px;
      font-family: 'Conv_majalla';
      font-size:1.6rem;
      svg {
        max-height: 17px;
        display:inline;
        position:absolute;
        left: -10px;
        width: 17px;
        top:0;
        bottom:0;
        margin:auto;
        path{
          fill: #5C3327;
        }
      }
    }
  }
`;
const CONTACT_QUERY = graphql`
  query ContactPage {
        contactinfo: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/pages/main/"}}) {
            edges {
              node {
                frontmatter {
                  title
                  contactpage{
                    cauayan{
                      add
                      contact
                      email
                    }
                    manila {
                      contact
                    }
                    social {
                      facebook
                      instagram
                      linkedin
                      tripadvisor
                    }
                    map{
                      childImageSharp{
                        fluid(maxWidth: 600){
                          ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
`;


const ContactUs = ({location}) => (
  <StaticQuery
  query={CONTACT_QUERY}
  render={({contactinfo}) => (
    <Layout location={location}>
      <article>
        <ContactUsContainer className="container">
          {contactinfo.edges.map(edge => {
            const manila = edge.node.frontmatter.contactpage.manila;
            const cauayan = edge.node.frontmatter.contactpage.cauayan;
            const social = edge.node.frontmatter.contactpage.social;
            const map = edge.node.frontmatter.contactpage.map;
            return (
              <ContactUsContent>
                <form name="contactpage" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/thankyou">
                  <div className="formCentered">
                    <div className="innerCont">
                      <h4>Leave a Message</h4>
                      <p>Please send us a message if you need any assistance with booking a room or activity.</p>
                      <div className="left">
                        <input type="hidden" name="form-name" value="contactpage" />
                        <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <input type="text" id="name" name="name" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="email">Email</label>
                          <input type="email" placeholder="Email" id="email" name="email" />
                        </div>
                      </div>
                      <div className="right">
                        <div className="form-group">
                        <label htmlFor="message">Message</label>
                          <textarea name="details" id="message" rows="8"></textarea>
                        </div>
                      </div>
                      <div className="form-group sendButton">
                        <Button type="submit">Send</Button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="ContactUs">
                  <ul>
                    <li><Pin/>{cauayan.add}</li>
                    <li><Phone/>{cauayan.contact}</li>
                    <li><Email/>{cauayan.email}</li>
                  </ul>
                  <ul>
                    <h4>manila office</h4>
                    {manila.map(item => (
                      <li>
                        <Phone/>{item.contact}
                      </li>
                    ))}
                  </ul>
                  <ul className="Social">
                    <li>
                      <a href={social.facebook}><Facebook/></a>
                    </li>
                    <li>
                      <a href={social.instagram}><Instagram/></a>
                    </li>
                    <li>
                      <a href={social.linkedin}><Linkedin/></a>
                    </li>
                    <li>
                      <a href={social.tripadvisor}><Tripadvisory/></a>
                    </li>
                  </ul>
                  <Img key={map.childImageSharp.fluid.originalName} fluid={map.childImageSharp.fluid}/>
                </div>
              </ContactUsContent>
            )
          })}
        </ContactUsContainer>
      </article>
    </Layout>
  )}
  />
)

export default ContactUs
