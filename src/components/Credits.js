import React from 'react'
import styled from 'styled-components'

import Header from './H2header'
import CarouselItem from './CarouselItem'

const CreditsSection = styled.section`
    background: ${props => props.theme.main_bg};
`
const Carousel = styled.div`
    display: flex;
`

const Credits = () => {

    return (
        <CreditsSection>
            <Header title="See the world through my lens" />
            <Carousel className="carousel__track">
                <CarouselItem />
            </Carousel>
        </CreditsSection >
    )
}

export default Credits
