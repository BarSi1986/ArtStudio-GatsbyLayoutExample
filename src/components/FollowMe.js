import React from 'react'
import styled from 'styled-components'

import Header from './H2header'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPinterestP, faInstagram, faTwitter, faGooglePlusG, faFacebookF } from '@fortawesome/free-brands-svg-icons'

const FollowWrapper = styled.section`
background:${props => props.theme.main_bg};
margin-bottom: 50px;
.list__wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    .icon__element{
        list-style: none;
        margin: 30px;
        width: 60px;
        height: 60px;
        font-size: 30px;
        color: ${props => props.theme.main_header};
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        cursor: pointer;
        position: relative;
        background: transparent;
        transition: .3s ease;
        transition-delay: .3s;
        border: 1px solid  ${props => props.theme.main_bg};
        &:hover{
            border: 1px solid  ${props => props.theme.main_red};
            &::after{
                width: 50px;
                height: 50px;
            }
            .icon__icon{
                color: ${props => props.theme.main_bg};
            }
        }

        &::after{
            content: "";
            background: ${props => props.theme.main_red};
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 0%;
            height: 0%;
            border-radius: 50%;
            z-index: 0;
            transition: .3s ease;
        }
    .icon__icon{
        position: absolute;
        z-index: 3;
        transition: .3s ease;
    }
    @media (max-width: 500px) {
        border: none;
        &:hover{
            border: none;
        }
    }
    }
}
`

const FollowMe = () => {
    return (
        <FollowWrapper id="follow">
            <Header title="Follow me" />
            <div className="list__wrapper">
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
        </FollowWrapper>
    )
}

export default FollowMe
