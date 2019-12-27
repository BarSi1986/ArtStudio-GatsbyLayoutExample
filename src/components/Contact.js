import React from 'react'
import styled from 'styled-components'

import Header from '../components/H2header'
import Input from '../components/Input'
import TextArea from '../components/TextArea'
import Button from '../components/Primarybutton'

import contactBg from '../images/contact-section.jpeg'

const ContactWrapper = styled.section`
margin: 15px;
background: ${props => props.theme.main_bg};
background-image: url(${contactBg});
background-size: cover;
background-position: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
padding-bottom: 60px;
.bg__cover{
    content: "";
    position: absolute;
    background: rgba(255, 255, 255, 0.9);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}
p{
    color: ${props => props.theme.main_para};
    z-index: 2;
    @media (max-width: 500px) {
        font-size: 16px;
    }
}
.button__section{
    z-index: 3;
    display: flex;
    width: 600px;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 500px) {
        width: 320px;
        flex-direction: column;
    }
    p{
        opacity: .7;
        font-size: 16px;
    }
}
`
const FormWrapper = styled.form`
z-index: 3;
`

const Contact = () => {
    return (
        <ContactWrapper id="contact">
            <div className="bg__cover"></div>
            <Header className="contact__header" title="Contact" />
            <p>feel free to contact us using below form</p>
            <FormWrapper>
                <Input id="name" label="Your name*" />
                <Input id="mail" label="Your mail*" />
                <TextArea id="text-area" label="Your message" />
            </FormWrapper>
            <div className="button__section">
                <p>all fields marked with (*) are required</p>
                <Button label="SEND" />
            </div>
        </ContactWrapper>
    )
}

export default Contact
