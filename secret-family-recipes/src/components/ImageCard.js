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
    background-color: white;
`

//ImageCard Component
export default function ImageCard() {
    return (
        <StyledImage>
            <div className='imageContainer'>Image Here</div>
            <div className='textContainer'>Text Here</div>
        </StyledImage>
    )
}