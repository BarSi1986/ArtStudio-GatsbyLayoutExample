import React from 'react'
import styled from 'styled-components'

import SectionHeader from './H2header'

const AboutMe = styled.section`
    background:${props => props.theme.main_bg};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    padding: 0px 15px;
    transition: .4s ease;
      p{
          padding: 0px 250px;
          margin-bottom: 20px;
          letter-spacing: 1px;
          color: ${props => props.theme.main_para};
          @media (max-width: 1100px){
            padding: 0px 70px;
            }
            @media (max-width: 500px) {
                padding: 0px 5px;
                text-align: left;
    }
      }
      &.moved{
        transform: translateX(-40px);
      }
`

const About = () => {
    return (
        <AboutMe id="about">
            <SectionHeader title="A little about me" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga delectus exercitationem dolor, deleniti aut nisi eaque architecto nobis dolores odit quae quod nostrum harum blanditiis quibusdam, placeat assumenda voluptatem perferendis dolorum recusandae alias modi. Blanditiis deserunt officiis possimus, illo id odio a, doloremque recusandae quaerat commodi veniam iste fugit odit?</p>
        </AboutMe>
    )
}

export default About
