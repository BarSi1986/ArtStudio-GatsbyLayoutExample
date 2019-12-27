import React from 'react'
import styled from 'styled-components'

const TextAreaWrapper = styled.div`
    position: relative;
    textarea{
    outline-color: ${props => props.theme.main_red};
    border: 1px solid ${props => props.theme.main_red};
    color: ${props => props.theme.main_header};
    width: 600px;
    height: 250px;
    padding: 25px;
    font-size: 17px;
    margin: 10px;
    resize: none;
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
    top: 50px;
    transform: translatey(-50%);
    left: 0;
    padding: 25px;
    font-size: 17px;
    transition: .2s ease;
 }
 textarea.focused ~ label{
        font-size: 12px;
        padding: 15px;
        top: 25px;
        opacity: .5;
 }
`

const TextArea = ({ id, label }) => {

    const isFocused = (event) => {
        const t = event.target
        t.classList.add('focused')
    }

    return (
        <TextAreaWrapper>
            <textarea onClick={isFocused} name="" id={id} cols="30" rows="10"></textarea>
            <label htmlFor={id}>{label}</label>
        </TextAreaWrapper>
    )
}

export default TextArea
