import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'
import Img from 'gatsby-image'

//icons
import Play from '../images/icons/play.inline.svg'

import CopyRight from '../components/copyRight'
import ContactInfo from '../components/contactInfo'

const FooterContainer = styled.div`
  position: relative;
  .desktopView{
    @media (min-width:1800px) {
      max-height: 500px;
    }
  }
  .tabletView{
    @media (min-width:768px) {
      max-height: 1450px;
    }
  }
  .footerContents {
    position:absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
    margin:auto;
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    @media (min-width:1200px) {
      padding: 0 4rem; 
    }
    @media (max-width:767px) {
      padding: 0 3rem; 
    }
    .contents {
      position:relative;
      @media (min-width:1200px)  {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      }
      @media (min-width:768px) and (max-width: 1199px) {
        grid-template-columns: 1fr;
        grid-gap: 30px;
      }
      @media (min-width:768px){
        display: grid;
      }
      @media (min-width:1800px) {
        grid-gap: 50px;
      }
      .newsletter{
        p {
          line-height:1.4rem;
          font-size:1.2rem;
          margin-bottom:15px;
        }
        input,button{
          height: 3.2rem;
          line-height:3.2rem;
          width: 100%;
          border-radius: 4px;
          @media (min-width:1200px) {
            max-width: 327px; 
          }
        }
        input {
          text-indent: 20px;
          font-family: 'Conv_majalla';
          font-size:1.4rem;
        }
        button{
          background-image:none;
          background-color:#4B858E;
          font-family: 'Conv_majalla';
          font-size:1.5rem;
          border:0;
          color:white;
          margin-top: 15px;
        }
      }
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
      .col {
        @media (max-width:767px) {
          margin-bottom:5rem ;
        }
        .title {
          text-align:left;
          color:white;
          font-family: 'Conv_CASTELAR';
          font-size:1.5rem;
          letter-spacing:1px;
          font-weight:300;
          position:relative;
          padding-bottom: 20px;
          @media (max-width:992px) {
            font-size:1.8rem;
          }
          &:after{
            content: '';
            height:3px;
            position:absolute;
            background-color:#4B858E;
            width:63px;
            bottom: 0;
            left: 0;
          }
        }
        p {
          text-align:left;
          color:white;
          font-family: 'Conv_majalla';
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
            color:white;
            font-family: 'Conv_majalla';
            text-decoration:none;
            font-size:1.4rem;
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
              color:white;
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
              &:hover{

              }
            }
          }
        }
      }
      .tranvelersIMG,.cauayanIMG{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin: 0 !important;
        height: 100%;
      }
      .cauayanIMG {
        @media (max-width:767px) {
          margin-bottom:6rem !important;
        }
      }
      .tranvelersIMG{
        @media (max-width:767px) {
          margin-top:4rem !important;
        }
      }
      .tranvelersIMG > div{
        max-width: 258px;
        margin: auto;
        width: 100%;
      }
      .cauayanIMG > div{
        max-width: 247px;
        margin: auto;
        width: 100%;
      }
    }
  }
`;


const FOOTER_QUERY = graphql`
   query FOOTER_QUERY {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/navigation/navigation/"}}) {
      edges {
        node {
          frontmatter {
            title
            footernav {
            cauayan{
              childImageSharp{
                  fluid(maxWidth:300){
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
            }
            newsletter{
              msg
            }
            qlinks {
              title
              url
            }
            advisory{
              childImageSharp{
                fluid(maxWidth:300){
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            footerbg {
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

const Footer = () => {
  return (
    <StaticQuery
    query={FOOTER_QUERY}
    render={({allMarkdownRemark}) => (
      <>
        {allMarkdownRemark.edges.map(edge =>  {
          const footNav = edge.node.frontmatter.footernav[0];
          return (
            <FooterContainer key="foot-er">
              <Img fluid={footNav.footerbg.desktop.childImageSharp.fluid} className='desktopView'/>
              <Img fluid={footNav.footerbg.tablet.childImageSharp.fluid} className='tabletView'/>
              <Img fluid={footNav.footerbg.mobile.childImageSharp.fluid} className='mobileView'/>
              <div className="footerContents">
                <div className="contents">
                  <div className="cauayanIMG">
                    <div><Img fluid={footNav.cauayan.childImageSharp.fluid}/></div>
                  </div>
                  <div className="col newsletter">
                    <h5 className="title">NEWSLETTTER</h5>
                    <p>{footNav.newsletter.msg}</p>
                    <form name="newsletter" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/thankyou">
                      <div className="newsletterForm">
                        <input type="hidden" name="form-name" value="newsletter" />
                        <div className="form-group">
                          <input type="email" placeholder="Email" id="email" name="email" />
                        </div>
                        <div className="form-group sendButton">
                          <button type="submit">Send</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col">
                    <h5 className="title">Quick Links</h5>
                    <ul>
                      {footNav.qlinks.map(qlink => {
                        return (
                          <li key={qlink.url}>
                            <Play/><Link to={qlink.url}>{qlink.title}</Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                  <ContactInfo/>
                  <div className="tranvelersIMG">
                    <Img fluid={footNav.advisory.childImageSharp.fluid}/>
                  </div>
                </div>
              </div>
            </FooterContainer>
          )
        })}
       <CopyRight/>
      </>
    )}/>
  )
}


export default Footer
