import React from 'react'
import styled from "styled-components"
import { graphql, useStaticQuery } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

import scrollTo from 'gatsby-plugin-smoothscroll';

const FooterWrapper = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
 .hero-logo{
        margin-top: 30px;
        line-height: 5px;
        color: ${props => props.theme.main_header};
        letter-spacing: 2px;
        text-align: center;
        p:nth-of-type(1){
          font-size: 50px;
          @import url('https://fonts.googleapis.com/css?family=Pinyon+Script&display=swap');
          font-family: 'Pinyon Script', cursive;
        }
    }
    button{
        font-size: 30px;
        color: ${props => props.theme.main_para};
        border: none;
        background:${props => props.theme.main_bg};
        cursor: pointer;
        transition: .4s ease;
        padding: 30px 50px;
        outline: none;
        position: relative;
        .icon{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 30%;
            transition: .3s ease;
        }
        &:hover{
            color: ${props => props.theme.main_header};
            .icon{
                top: 15%;
            }
        }
    }
    .copy{
        padding: 15px;
        font-size: 13px;
        color: ${props => props.theme.main_para};
    }
`

const Footer = () => {

    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `)

    return (
        <FooterWrapper>
            <button onClick={() => scrollTo('#top')} className="up__button">
                <FontAwesomeIcon className="icon" icon={faChevronUp} />
            </button>
            <div className='hero-logo'>
                <p>ArtStudio</p>
                <p>photography</p>
            </div>
            <p className='copy'>&#x24B8; Copywright 2019 ArtStudio. Author: {data.site.siteMetadata.author}</p>
        </FooterWrapper >
    )
}

export default Footer
