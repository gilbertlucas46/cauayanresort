import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from "gatsby"
import {Button} from '../components/utils/button'

const ContactContainer = styled.div`
  margin-top:5rem;
  .ContactContent {
    position: relative;
    .desktopView{
      max-height: 600px;
    }
    form {
      margin-bottom:0;
      .formCentered{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin: 0 !important;
        height: 100%;
      }
      .innerCont {
        @media (min-width:768px) and (max-width: 991px){
          width:80%;
        }
        @media (min-width:992px) {
          width:100%;
        }
        @media (min-width:768px) {
          display:grid;
          grid-template-columns:1fr 1fr;
          grid-gap:30px;
          grid-template-areas:
          "title title"
          "input textarea"
          "submit submit";
        }
        @media (max-width:767px) {
          width: 100%;
        }
        input,textarea {
          border: 1px solid #D6D1CA;
          text-indent: 1.5rem;
          width: 100%;
          font-family: 'Conv_majalla';
          font-size: 1.5rem;
          color:#727272;
        }
        h4 {
          grid-area: title;
          font-family: 'Conv_CASTELAR';
          font-size: 2.6rem;
          color:#5C3327;
          font-weight: 300;
          @media (min-width:992px) {
            margin-bottom:0;
          } 
        }
        textarea {
          padding-top: 1.4rem;
          min-height: 13rem;
        }
        .form-group {
          &:last-of-type {
           input{
            margin-bottom:0;
           }
          }
          input {
            line-height: 3.4rem;
            margin-bottom: 1.1rem;
            grid-area:input;
          }
        }
        textarea {
          grid-area: textarea;
          @media (max-width:767px) {
            margin: 1.1rem 0;
          }
        }
      }
      .sendButton {
        grid-area: submit;
        button {
          margin:auto;
          @media (max-width:991px) {
            width: 100%;
          }
        }
      }
    }
    .desc {
      max-width: 896px;
      position:absolute;
      top:0;
      bottom:0;
      right:0;
      left:0;
      margin:auto;
      width:100%;
      display:grid;
    }
  }
`;


const CONTACTBG_QUERY = graphql`
   query CONTACTBG_QUERY {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/pages/main/"}}) {
      edges {
        node {
          frontmatter {
            title
            home {
              contact{
                desktop {
                   childImageSharp{
                    fluid(maxWidth:2000){
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
                tablet {
                   childImageSharp{
                    fluid(maxWidth:1024){
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
                mobile {
                   childImageSharp{
                    fluid(maxWidth:580){
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
  }
`;

const HomeContact = () => (
  <StaticQuery
  query={CONTACTBG_QUERY}
  render={({allMarkdownRemark}) => (
    <ContactContainer>
      {allMarkdownRemark.edges.map(edge =>  {
        const contact = edge.node.frontmatter.home.contact;
        return (
          <div className="ContactContent" key="contact">
            <Img fluid={contact.desktop.childImageSharp.fluid} className='desktopView'/>
            <Img fluid={contact.tablet.childImageSharp.fluid} className='tabletView'/>
            <Img fluid={contact.mobile.childImageSharp.fluid} className='mobileView'/>
            <div className="desc container">
              <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/thankyou">
                <div className="formCentered">
                  <div className="innerCont">
                    <h4>Contact Us</h4>
                    <div className="left">
                      <input type="hidden" name="form-name" value="contact" />
                      <div className="form-group">
                        <input type="text" placeholder="Name" id="name" name="name" />
                      </div>
                      <div className="form-group">
                        <input type="email" placeholder="Email" id="email" name="email" />
                      </div>
                      <div className="form-group">
                        <input type="text" placeholder="Phone" id="phone" name="phone" />
                      </div>
                    </div>
                    <div className="right">
                      <div className="form-group">
                        <textarea name="details" placeholder="Message" id="message" rows="8"></textarea>
                      </div>
                    </div>
                    <div className="form-group sendButton">
                      <Button type="submit">Send</Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )
      })}
    </ContactContainer>
  )}/>
)


export default HomeContact
