//Import dependencies
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import styled from 'styled-components'
import headerImage from '../images/cutting-board-header.jpg'
import axios from 'axios'

//Import components
import NavBar from './NavBar'
import ImageCard from './ImageCard'

//Styled Home
const StyledHome = styled.div`
    div.headerImage {
        height: 45vh;
        background-image: url(${headerImage});
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        a, h1 {
            margin: 3.5% 0;
        }

        a {
            margin: 0 5%;
            text-decoration: none;
            border: 2px solid Darkorange;
            background-color: rgb(255, 255, 255, .7);
            border-radius: 8px;
            padding: 1.5% 1.5%;
            transition: all 0.3s ease-in-out;

            &:visited {
                color: darkorange;
            }

            &:hover {
                font-weight: bold;
                border-width: 3px;
                transition: all 0.3s ease-in-out;
            }
        }
    }
     div.imageGallery {
        display: flex; 
        flex-direction: row;
        justify-content: space-evenly;
        margin: 5% 0;
     }
`

//Home Component
function Home(props){
    const [recipes, setRecipes] = useState([])
    
    const clickHandler = (event) => {
        axios.get('https://api.spoonacular.com/recipes/random?number=3&apiKey=8c2984ed38a6424b97b2f5826036ca39')
            .then(response => {
                console.log(response.data)
                setRecipes(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return(
        <StyledHome>
            <NavBar />
            <div className='headerImage'>
                <h1>Grandma's Secret Recipes</h1>
                <Link to='/user/register'>GET STARTED</Link>
            </div>
            {/* div with image card gallery */}
            <div className='imageGallery'>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
            </div>
            <button onClick={clickHandler}>Get New Recipes</button>
            {/* footer bar */}
        </StyledHome>
    );
};

export default Home;