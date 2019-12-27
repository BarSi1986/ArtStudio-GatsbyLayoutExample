import React from 'react'
import styled from "styled-components"
import background from '../images/hero2.jpeg'

const HeaderWrapper = styled.header`
width: 100%;
height: 85vh;
background: ${props => props.theme.main_bg};
padding: 15px;
@media (max-width: 500px){
        height: 88vh;
      }
  transition: .4s ease;
&.moved{
  transform: translateX(-40px);
}
`

const Hero = styled.div`
    width: 100%;
    height: 100%;

    background-image: url(${background});
    background-position: center;
    background-size: cover;
    position: relative;
    .hero-logo{
        position: absolute;
        top: 22%;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        line-height: 5px;
        color: ${props => props.theme.main_bg};
        letter-spacing: 2px;
        p:nth-of-type(1){
          font-size: 50px;
          @import url('https://fonts.googleapis.com/css?family=Pinyon+Script&display=swap');
          font-family: 'Pinyon Script', cursive;
        }
    }
    h1{
      color: ${props => props.theme.main_bg};
      letter-spacing: 5px;
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      @media (max-width: 1100px) {
        left: 0;
        transform: translate(0%, -50%);
        padding: 0px 0px;
        font-size: 30px;
        width: 100%;
        text-align: center;
        top: 42%;
      }
      @media (max-width: 500px){
        top: 45%;
      }
      
      &::after{
        content:"";
        width: 100px;
        height: 4px;
        background:${props => props.theme.main_bg};
        position: absolute;
        bottom: -40px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .hero-slogan-small{
      position: absolute;
        top: 60%;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        line-height: 1;
        color: ${props => props.theme.main_bg};
        letter-spacing: 2px;
        @media (max-width: 1100px) {
        left: 0;
        transform: translate(0%, -50%);
        font-size: 15px;
        width: 100%;
        text-align: center;
        top: 70%;
      }
      @media (max-width: 500px){
        font-size: 15px;
        letter-spacing: 1px;
        line-height: 1;
        top: 80%;
        padding: 30px;
      }
    }
    .hero__cover{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.4);
    }
`

const Header = () => {


  return (
    <HeaderWrapper id="top">
      <Hero>
        <div className="hero__cover"></div>
        <div className='hero-logo'>
          <p>ArtStudio</p>
          <p>photography</p>
        </div>
        <h1>See the world through my lens</h1>
        <div className='hero-slogan-small'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <p> Tempora suscipit itaque quia magnam</p>
        </div>
      </Hero>
    </HeaderWrapper >
  )
}

export default Header
