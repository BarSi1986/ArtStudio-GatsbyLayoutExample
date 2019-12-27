import React from 'react'
import styled from 'styled-components'

const SectionHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 2;
 h2{
        color: ${props => props.theme.main_header};
        margin-top: 90px;
        @media (max-width: 1100px){
            margin-top: 25px;
            }
    }
    div{
        width: 100px;
        height: 4px;
        background:${props => props.theme.main_red};
        margin-top: 20px;
        margin-bottom: 50px;
      }
`


const H2header = ({ title }) => {
    return (
        <SectionHeader title={title}>
            <h2>{title}</h2>
            <div></div>
        </SectionHeader>
    )
}
export default H2header
