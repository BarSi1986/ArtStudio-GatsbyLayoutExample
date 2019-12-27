import React from 'react'
import styled from 'styled-components'

const InputWrapper = styled.div`
position: relative;
input{
    outline-color: ${props => props.theme.main_red};
    border: 1px solid ${props => props.theme.main_red};
    color: ${props => props.theme.main_header};
    width: 600px;
    height: 70px;
    padding: 25px;
    font-size: 17px;
    margin: 10px;
    &:hover{
        box-shadow: 0px 2px 10px -2px ${props => props.theme.main_red};;
    }
    @media (max-width: 500px) {
        width: 320px;
    }
}
 label{
    color: ${props => props.theme.main_para};
    position: absolute;
    top: 50%;
    transform: translatey(-50%);
    left: 0;
    padding: 25px;
    font-size: 17px;
    transition: .2s ease;
 }
 input.focused ~ label{
        font-size: 12px;
        padding: 15px;
        top: 25px;
        opacity: .5;
 }
`

const Input = ({ label, id }) => {

    const isFocused = (event) => {
        const t = event.target
        t.classList.add('focused')
    }

    return (
        <InputWrapper>
            <input autoComplete="off" onClick={isFocused} id={id} type="text" />
            <label htmlFor={id}>{label}</label>
        </InputWrapper>
    )
}

export default Input
