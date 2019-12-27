import React from 'react'
import styled from 'styled-components'

const PrimaryButton = styled.button`
    padding: 15px 35px;
    background: ${props => props.theme.main_red};
    color: ${props => props.theme.main_bg};
    cursor: pointer;
    position: relative;
    overflow: hidden;
    outline: none;
    border: none;
    box-shadow: 0px 2px 5px -3px ${props => props.theme.main_header};
    &::after{
        content: "";
        position: absolute;
        top: 0;
        left:0;
        width: 120%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        transform: translateX(-120%) skewX(-20deg);
        transition: .3s ease;
        z-index: 0;
    }
    &:hover{
        &::after{
            transform: translateX(-10%) skewX(-20deg);
        }
    }
    div{
            position: relative;
            z-index: 3;
        }
`

const Primarybutton = ({ label }) => {
    return (
        <PrimaryButton>
            <div>{label}</div>
        </PrimaryButton>
    )
}

export default Primarybutton
