import React from 'react'
import styled from 'styled-components'

import SectionHeader from './H2header'
import ItemHoverBox from './ItemHoverBox'
import Button from './Primarybutton'

import animals from '../images/animals-grid.jpeg'
import nature from '../images/nature-grid.jpeg'
import people from '../images/people-grid.jpeg'
import wedding from '../images/wedding-grid.jpeg'
import urban from '../images/urban-grid.jpeg'
import architecture from '../images/architecture-grid.jpeg'

const WorkSection = styled.section`
   background:${props => props.theme.main_bg};
   color: ${props => props.theme.main_header};
   padding: 0px 15px;
   .button-area{
       width: 100%;
       display: flex;
       justify-content: center;
       align-items: flex-start;
       height: 20vh;
       padding-top: 80px;
       @media (max-width: 500px){
                padding-top: 60px;
            }
   }
`

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 25px;
    min-height: 140vh;
    @media (max-width: 1100px) {
        min-height: 75vh;
    }
    @media (max-width: 500px) {
        grid-gap: 10px;
    }
    div{
        background-size: cover;
        background-position: center;
        position: relative;
    }
    .one {
        grid-column: 1 / 3;
        grid-row: 1;
    }
    .two{
        grid-column: 3 / 4;
        grid-row: 1 / 3;
    }
    .five{
        grid-column: 1 / 3;
        grid-row: 3;
    }
`

const Works = () => {
    return (
        <WorkSection id="works">
            <SectionHeader title="Works" />
            <GridWrapper>
                <div style={{ backgroundImage: `url(${nature})` }} className="one">
                    <ItemHoverBox header="Nature" para="beautiful nature" />
                </div>
                <div style={{ backgroundImage: `url(${urban})` }} className="two">
                    <ItemHoverBox header="Urban" para="beautiful urban" />
                </div>
                <div style={{ backgroundImage: `url(${people})` }} className="three">
                    <ItemHoverBox header="People" para="beautiful people" />
                </div>
                <div style={{ backgroundImage: `url(${wedding})` }} className="four">
                    <ItemHoverBox header="Wedding" para="beautiful wedding" />
                </div>
                <div style={{ backgroundImage: `url(${architecture})` }} className="five">
                    <ItemHoverBox header="Architecture" para="beautiful architecture" />
                </div>
                <div style={{ backgroundImage: `url(${animals})` }} className="six">
                    <ItemHoverBox header="Animals" para="beautiful animals" />
                </div>
            </GridWrapper>
            <div className="button-area">
                <Button label="LOAD MORE" />
            </div>
        </WorkSection>
    )
}

export default Works
