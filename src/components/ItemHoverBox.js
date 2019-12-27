import React from 'react'
import styled from 'styled-components'

const ItemBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .2s ease-in;
        cursor: pointer;
        @media (max-width: 500px){
            background: rgba(80, 80, 80, 0.7);
        }
        @media (min-width: 500px){
            &:hover{
            background: rgba(0, 0, 0, 0.2);
            .innerBoxWrapper{
                width: 55%;
                height: 70%;
                @media (max-width: 1100px){
                    width: 65%;
                    height: 80%;
                }
                .innerBoxLine{
                    margin: 15px;
                    width: 150px;
                    @media (max-width: 1100px){
                        margin: 5px;
                        width: 100px; 
                    }
                }
            }
        }
}

    .innerBoxWrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        width: 45%;
        height: 60%;
        position: relative;
        transition: .3s;
        transition-delay: .1s;
        @media (max-width: 1100px){
                width: 60%;
                height: 75%;
            }
        h3{
            color: white;
            @media (max-width: 1100px){
                font-size: 20px;
            }
            
        }
        .innerBoxLine{
            width: 50px;
            height: 3px;
            background: white;
            transition: .4s;
            transition-delay: .2s;  
            @media (max-width: 500px){
               display: none;
            }          

        }
        .grid-txt{
            color: white;
            padding-top: 20px;
            @media (max-width: 1100px){
                font-size: 15px;
            }
            @media (max-width: 500px){
                padding-top: 0px;
        }
        }
        .inner-border{
            position: absolute;
            height: 70px;
            width: 70px;
            @media (max-width: 1100px){
                height: 40px;
                width: 40px;
            }
            @media (max-width: 500px){
                display: none;
            }
        }
        .border-top-left{
            top: 0;
            left: 0;
            border-top: 3px solid white;
            border-left: 3px solid white;
        }
        .border-top-right{
            top: 0;
            right: 0;
            border-top: 3px solid white;
            border-right: 3px solid white;
        }
        .border-bottom-left{
            bottom: 0;
            left: 0;
            border-bottom: 3px solid white;
            border-left: 3px solid white;
        }
        .border-bottom-right{
            bottom: 0;
            right: 0;
            border-bottom: 3px solid white;
            border-right: 3px solid white;
        }
    }
`

const ItemHoverBox = ({ header, para }) => {
    return (
        <ItemBox>
            <div className="innerBoxWrapper">
                <h3>{header}</h3>
                <div className='innerBoxLine'></div>
                <p className='grid-txt'>{para}</p>

                <div className="inner-border border-top-left"></div>
                <div className="inner-border border-top-right"></div>
                <div className="inner-border border-bottom-left"></div>
                <div className="inner-border border-bottom-right"></div>
            </div>
        </ItemBox>
    )
}

export default ItemHoverBox
