//Import dependencies
import React from 'react'
import styled from 'styled-components'

//Styled ImageCard
const StyledImage = styled.div`
    width: 25%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(210, 210, 210);
    border-radius: 6px;
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    background-image: url(${pr => pr.url});
    background-size: cover;
    background-position: center;

    div.textContainer {
        width: 100%;
        background-color: rgb(255, 255, 255, .7);
        text-align: center;
    }
`

//ImageCard Component
export default function ImageCard(props) {
    const {image, title} = props.recipeInfo
    return (
        <StyledImage url={image}>
            <div className='textContainer'>
                <h3>{title}</h3>
            </div>
        </StyledImage>
    )
}