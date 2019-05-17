import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from "gatsby"

const ContactContainer = styled.div`

`;

const Button = styled.button`

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
                <input type="hidden" name="form-name" value="contact" />
                <div className="form-group">
                    <input type="text" placeholder="Name" id="name" name="name" />
                </div>
                <div className="form-group">
                    <input type="email" placeholder="Email" id="email" name="email" />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Phone" id="phone" name="company" />
                </div>
                <div className="form-group">
                  <textarea name="details" placeholder="Message" id="message" rows="8"></textarea>
                </div>
                <div className="form-group sendButton">
                  <Button>Send</Button>
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
