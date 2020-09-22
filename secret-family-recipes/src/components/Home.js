//Import dependencies
import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import styled from 'styled-components'
import headerImage from '../images/cutting-board-header.jpg'

//Import components
import NavBar from './NavBar'

const StyledHome = styled.div`
    div.headerImage {
        border: 1px solid black;
        height: 45vh;
        background-image: url(${headerImage});
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

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
`



function Home(props){
    return(
        <StyledHome>
            <NavBar></NavBar>
            <div className='headerImage'>
                <h1>Grandma's Secret Recipes</h1>
                <Link to='/user/register'>GET STARTED</Link>
            </div>
            
            {/* div with image card gallery */}
            {/* footer bar */}
        </StyledHome>
    );
};

export default Home;