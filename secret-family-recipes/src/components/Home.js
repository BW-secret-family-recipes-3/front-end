//Import dependencies
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import styled from 'styled-components'
import headerImage from '../images/cutting-board-header.jpg'
import axios from 'axios'

//Import components
import ImageCard from './ImageCard'

//Styled Home
const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    div.headerImage {
        width: 100%;
        height: 35vh;
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

     button {
        margin: 0 5%;
        border: 2px solid slategray;
        background-color: white;
        color: slategray;
        border-radius: 8px;
        padding: 1.5% 1.5%;
        transition: all 0.3s ease-in-out;

        &:hover {
            color: Darkorange;
            border-color: Darkorange;
            transition: all 0.3s ease-in-out;
        }
     }
`

//Home Component
function Home(props){
    const [recipes, setRecipes] = useState([])
    
    const axiosCall = () => {
        axios.get('https://api.spoonacular.com/recipes/random?number=3&apiKey=7cc561dde52e4fccbe334a2cdcfa67ea')
            .then(response => {
                setRecipes(response.data.recipes)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const clickHandler = (event) => {
        axiosCall()
    }

    // useEffect(() => {
    //     axiosCall()
    // }, [])

    return(
        <StyledHome>

            <div className='headerImage'>
                <h1>Grandma's Secret Recipes</h1>
                <Link to='/user/register'>GET STARTED</Link>
            </div>

            <div className='imageGallery'>
                {recipes ? 
                recipes.map(recipe => 
                    <ImageCard key={recipe.id} recipeInfo={recipe}/>
                )
                : <p>Loading...</p>
                }
            </div>

            <button onClick={clickHandler}>GET NEW RECIPES</button>

        </StyledHome>
    );
};

export default Home;