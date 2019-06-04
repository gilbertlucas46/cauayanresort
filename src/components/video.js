import React, { useState, useEffect } from 'react';
import {useSpring, animated} from 'react-spring'
import { StaticQuery, graphql, } from "gatsby"
import styled from 'styled-components'
import Img from 'gatsby-image'

//icons
import Closebtn from '../images/icons/close.inline.svg'

const VideoContainer = styled.div`
  position:relative;
  margin: 5rem 0;
  .vidContent{
    position:relative;
  }
  
  .modalBody{
    width:100%;
    height:100%;
    .close-modal {
      position: fixed;
      height: 100vh;
      width: 100%;
      background-color: rgba(31, 16, 11, 0.60);
      top: 0;
      left: 0;
      &:hover{
        cursor:pointer;
      }
    }
    .close-button {
      position: absolute;
      top: -36px;
      right: 0;
      background-color: transparent;
      border: 0;
      width: 30px;
      height: 30px;
      opacity: 0.5;
      outline:0;
      &:hover{
        cursor:pointer;
        opacity:1;
      }
    }
  }
  .Modal{
    position:fixed;
    z-index:99;
    background-color: white;
    max-width:600px;
    max-height:338px;
    left:0;
    right:0;
    bottom:0;
    top:0;
    margin:auto;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.86);
     /* mobile */
    @media (max-width:767px) {
      width: 85%;
    }
    iframe {
      width: 100%;
      height: 100%;
      border: 0;
      border-radius:4px;
    }
  }
`;


const VIDEO_QUERY = graphql`
   query VIDEO_QUERY {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/pages/main/"}}) {
      edges {
        node {
          frontmatter {
            title
            home {
              video {
                button {
                  childImageSharp {
                    fixed(width: 140) {
                      ...GatsbyImageSharpFixed_withWebp_tracedSVG
                    }
                  }
                }
                desktop{
                  childImageSharp {
                    fluid(maxWidth:1920){
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
                tablet{
                  childImageSharp {
                    fluid(maxWidth:1100){
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
                mobile{
                  childImageSharp {
                    fluid(maxWidth:500){
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
                title
                subtitle
                desc
                video
              }
            }
          }
        }
      }
    }
  }
`;

const Video = () => {
  
  const [isNavOpen, setNavOpen] = useState(false);
  const navAnimation = useSpring({
    transform: isNavOpen ? `scale(1)` : `scale(0)`,
  });
  
  useEffect(() => {
    const ModalClass = document.querySelector('html');
    isNavOpen ? ModalClass.classList.add('modal-open') : ModalClass.classList.remove('modal-open');
  });
  

  return (
    <StaticQuery
      query={VIDEO_QUERY}
      render={({allMarkdownRemark}) => (
        <VideoContainer className="theVId">
          {allMarkdownRemark.edges.map(edge =>  {
            const vid = edge.node.frontmatter.home.video;
            return (
              <div className="vidContent" key="videoModal">
              <Img fluid={vid.desktop.childImageSharp.fluid} className='desktopView'/>
              <Img fluid={vid.tablet.childImageSharp.fluid} className='tabletView'/>
              <Img fluid={vid.mobile.childImageSharp.fluid} className='mobileView'/>
                <div className="caption">
                  <div className="content"> 
                    <button onClick={() => setNavOpen(!isNavOpen)} className='menu-button'>
                      <Img className="playbutton" fixed={vid.button.childImageSharp.fixed} />
                    </button>
                    <h3>{vid.title}</h3>
                    <h4>{vid.subtitle}</h4>
                    <div className="desc" dangerouslySetInnerHTML = {{ __html: vid.desc }} />   
                  </div>
                </div>
                <div className="modalBody">
                  {isNavOpen ? <div className="close-modal" onClick={() => setNavOpen(!isNavOpen)}></div> : ''} 
                  <animated.div className="Modal" style={navAnimation}>
                    <button onClick={() => setNavOpen(!isNavOpen)} className='close-button'>
                      <Closebtn/>
                    </button>
                    <iframe title="cauayanVid" className="video" src={isNavOpen ? `${vid.video}` : ``}></iframe>
                  </animated.div>
                </div>
              </div>
            )
          })}
        </VideoContainer>
      )}/>
  )
}

export default Video
