import React, { useState } from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import Fade from 'react-reveal/Fade';





const CarouselItem = () => {

    const [active, setActive] = useState(0)

    const Item = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 15px 300px;
        position: relative;
        @media (max-width: 1100px){
            padding: 15px 150px;
            }
            @media (max-width: 500px){
                padding: 15px 15px;
            }
    .carousel__button{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 35px;
        color: ${props => props.theme.main_para};
        border: none;
        background:${props => props.theme.main_bg};
        cursor: pointer;
        transition: .4s ease;
        padding: 20px 40px;
        outline: none;
        @media (max-width: 1100px){
            padding: 5px 5px;
            }
            @media (max-width: 500px){
                display: none;
            }
    }
    .carousel__button--left{
        left: 70px;
        &:hover{
            left: 62px;
            color: ${props => props.theme.main_header};
        }
    }
    .carousel__button--right{
        right: 70px;
        &:hover{
            right: 62px;
            color: ${props => props.theme.main_header};
        }
    }
p{
    color: ${props => props.theme.main_para};
    text-align: center;
}
h4{
    color: ${props => props.theme.main_para};
    font-style: italic;
}
.dots__wrapper{
    .carousel__indicator{
        width: 15px;
        height: 15px;
        background: ${props => props.theme.main_para};
        border-radius: 50%;
        margin: 8px;
        cursor: pointer;
        outline: none;
        transition: .4s ease;
        border: none;
        &:hover{
            background: ${props => props.theme.main_red};
        }
    }
    .carousel__indicator[data-quote="${active}"]{
        background: ${props => props.theme.main_red};
    }
}

`



    const quotes = {
        0: {
            quote: "Great photographer, he can capture incredible images from any place, anywhere, working with him is such a proffesional and great time, thanks in the name of whole company.",
            client: "Peter Forman, CEO of Native Instruments",
        },
        1: {
            quote: "Once in a lifetime you meet such talented man, when we were deep in the jungle, where enemies were all around us, he did the great selfie of all times, excelent job !",
            client: "John Rambo, former Comando",
        },
        2: {
            quote: "What's more i can say besides the fact that this photographer is just perfect in all aspect. He works hard and the results are just awsome",
            client: "Will Smith, actor",
        },
    }

    const handleSetClick = (event) => {
        setCurrent(quotes[event.target.getAttribute("data-quote")])
        setActive(event.target.getAttribute("data-quote"))
    }

    const rightArrowHandler = () => {
        if (active === "0" || active === 0) {
            setCurrent(quotes[1])
            setActive(1)
        } else if (active === "1" || active === 1) {
            setCurrent(quotes[2])
            setActive(2)
        }
    }

    const leftArrowHandler = () => {
        if (active === "2" || active === 2) {
            setCurrent(quotes[1])
            setActive(1)
        } else if (active === "1" || active === 1) {
            setCurrent(quotes[0])
            setActive(0)
        }
    }

    const [current, setCurrent] = useState(quotes[0])

    return (
        <Item className='carousel-item'>
            <button onClick={leftArrowHandler} className="carousel__button carousel__button--left">
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <Fade>
                <p>{current.quote}</p>
                <h4>{current.client}</h4>
            </Fade>
            <div className='dots__wrapper'>
                {Object.keys(quotes).map(index => (
                    <button
                        onClick={event => handleSetClick(event)}
                        className="carousel__indicator"
                        data-quote={index}
                        key={index}
                    />
                ))}
            </div>
            <button onClick={rightArrowHandler} className="carousel__button carousel__button--right">
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </Item>
    )
}

export default CarouselItem
