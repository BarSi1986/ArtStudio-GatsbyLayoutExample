import React from 'react'
import styled from 'styled-components'

import scrollTo from 'gatsby-plugin-smoothscroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, } from '@fortawesome/free-solid-svg-icons';
import { faPinterestP, faInstagram, faTwitter, faGooglePlusG, faFacebookF } from '@fortawesome/free-brands-svg-icons'

const NavBarDesktop = styled.nav`
    background:${props => props.theme.main_bg};
    color: ${props => props.theme.main_header};
    padding: 0px 15px;
    height: 100px;
    width: 100%;
    .desktop__nav__wrapper.moved{
        transform: translateX(-40px);
    }
    .desktop__nav__wrapper{
        transition: .4s ease;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        border-bottom: 1px solid rgba(90, 89, 87, 0.2);
        margin: 0 auto;
        height: 70px;

        .burger{
            cursor: pointer;
            padding-right: 20px;
            color: ${props => props.theme.main_header};
                background:${props => props.theme.main_bg};
                border: none;
                outline: none;
            font-size: 22px;
            @media (min-width: 500px){
                display: none;
            }
        }

        .desktop__nav__item {
            list-style: none;
            letter-spacing: 1px;
            width: 160px;
            text-align: center;
            position: relative;
            overflow: hidden;
            @media (max-width: 1100px){
                width: 120px;
            }
            @media (max-width: 500px){
                    display: none;
                }
            button{
                padding: 16px;
                width: 160px;
                cursor: pointer;
                color: ${props => props.theme.main_header};
                background:${props => props.theme.main_bg};
                border: none;
                outline: none;
                @media (max-width: 1100px){
                    padding: 5px;
                    width: 120px;
                }
            }
            &::after{
                content:"";
                position: absolute;
                left: 50%;
                transform:translateX(-50%);
                bottom: 10px;
                width: 0%;
                height: 2px;
                background: ${props => props.theme.main_red};
                transition: .2s ease;
                @media (max-width: 1100px){
                bottom: 0px;
            }
            }
            &:hover{
                    &::after{
                        width: 35%;
                        height: 4px;
                    }
                }
        }
    }
    @media (max-width: 1100px){
        font-size: 15px;
    }

    .mobile__nav__wrapper.hidden{
        transform: translateX(0%);
    }
`

const Logo = styled.div`
    padding-left: 40px;
    font-size: 40px;
    @import url('https://fonts.googleapis.com/css?family=Pinyon+Script&display=swap');
    font-family: 'Pinyon Script', cursive;
    margin-right: auto;
    display: block;
    line-height: 70px;
            @media (max-width: 500px){
                font-size: 30px;
                padding-left: 20px;
            }
`

const MobileNavWrapper = styled.div`
    @media (min-width: 500px){
        display: none;
    }

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateX(100%);
    background: ${props => props.theme.main_bg};
    z-index: 10;
    transition: all 0.9s cubic-bezier(.17,.67,0,.99);
    .mobile__nav__wrapper{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        .mobile__nav__item{
            list-style: none;
            text-align: center;
            font-size: 20px;
            padding: 10px;
            opacity:0;
            transition: .4s ease;
            transition-delay: .4s;
            transform: translateX(20px);
            button{
                color: ${props => props.theme.main_header};
                background:${props => props.theme.main_bg};
                border: none;
                outline: none;
            }

            &.clicked{
                opacity: 1;
                transform: translateX(0);
            }
        }
    }
    .times{
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 25px;
    }
    .social__list__wrapper{
        display: flex;
        position: absolute;
        left: 50%;
        bottom: 30px;
        transform: translateX(-45%);
        opacity:0;
        transition: .4s ease;
        transition-delay: .6s;
        .icon__element{
            padding: 15px;
            font-size: 25px;
            
        }
        &.clicked{
                opacity: 1;
                transform: translateX(-50%);
            }
    }
    
`

const Nav = () => {

    const hideMobileNav = () => {
        const mobileNav = document.querySelector('.mobile__nav__wrapper')
        mobileNav.classList.toggle('hidden')
        const header = document.querySelector('#top')
        header.classList.toggle('moved')
        const nav = document.querySelector('.desktop__nav__wrapper')
        nav.classList.toggle('moved')
        const about = document.querySelector('#about')
        about.classList.toggle('moved')

        const navItem = document.querySelectorAll('.mobile__nav__item')
        navItem.forEach(item => {
            item.classList.toggle('clicked')
        })

        const socialIcons = document.querySelector('.social__list__wrapper')
        socialIcons.classList.toggle('clicked')
    }

    return (
        <NavBarDesktop>
            <ul className="desktop__nav__wrapper">
                <Logo>ArtStudio</Logo>
                <li className="desktop__nav__item">
                    <button onClick={() => scrollTo('#about')}>ABOUT ME</button>
                </li>
                <li className="desktop__nav__item">
                    <button onClick={() => scrollTo('#works')}>WORKS</button>
                </li>
                <li className="desktop__nav__item">
                    <button onClick={() => scrollTo('#follow')}>FOLLOW ME</button>
                </li>
                <li className="desktop__nav__item">
                    <button onClick={() => scrollTo('#contact')}>CONTACT</button>
                </li>
                <button className="burger">
                    <FontAwesomeIcon onClick={hideMobileNav} icon={faBars} />
                </button>
            </ul>

            <MobileNavWrapper className="mobile__nav__wrapper">
                <Logo>ArtStudio</Logo>
                <ul style={{ padding: "0", margin: "0" }} className="mobile__nav__wrapper">
                    <li className="mobile__nav__item">
                        <button onClick={() => {
                            scrollTo('#about')
                            hideMobileNav()
                        }}>ABOUT ME</button>
                    </li>
                    <li className="mobile__nav__item">
                        <button onClick={() => {
                            scrollTo('#works')
                            hideMobileNav()
                        }}>WORKS</button>
                    </li>
                    <li className="mobile__nav__item">
                        <button onClick={() => {
                            scrollTo('#follow')
                            hideMobileNav()
                        }}>FOLLOW ME</button>
                    </li>
                    <li className="mobile__nav__item">
                        <button onClick={() => {
                            scrollTo('#contact')
                            hideMobileNav()
                        }}>CONTACT</button>
                    </li>
                </ul>
                <FontAwesomeIcon onClick={hideMobileNav} className="times" icon={faTimes} />

                <div className="social__list__wrapper">
                    <div className='icon__element'>
                        <FontAwesomeIcon className="icon__icon" icon={faPinterestP} />
                    </div>
                    <div className='icon__element'>
                        <FontAwesomeIcon className="icon__icon" icon={faInstagram} />
                    </div>
                    <div className='icon__element'>
                        <FontAwesomeIcon className="icon__icon" icon={faTwitter} />
                    </div>
                    <div className='icon__element'>
                        <FontAwesomeIcon className="icon__icon" icon={faGooglePlusG} />
                    </div>
                    <div className='icon__element'>
                        <FontAwesomeIcon className="icon__icon" icon={faFacebookF} />
                    </div>
                </div>
            </MobileNavWrapper>
        </NavBarDesktop>
    )
}

export default Nav
