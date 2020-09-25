import React, {useEffect} from 'react';
import { connect } from "react-redux";
import {BrowserRouter as Router, Link} from "react-router-dom";
import styled from 'styled-components';
import Axios from 'axios';


const StyledHeader = styled.header`
background-color: darkorange;
padding: 1%;
margin-bottom: 2%;
    
    h3 {
        padding: 0 2% 1% 2%;
        font-size: 5rem;
        border-bottom: solid black 7px;
        border-left: solid darkorange 30px;
        border-right: solid darkorange 30px;
        display: inline-block;
        border-radius: 7px;
        text-shadow: 1px 1px 5px #ffecd8;
        letter-spacing: 3px;
    }
`

const FlexContainer = styled.nav`
display: flex;
justify-content: center;

    a {
        display: inline-block;
        text-decoration: none;
        margin: 2% 8% 0 8%;
        background-color: white;
        color: black;
        border: solid 2px black;
        border-radius: 10px;
        padding: 1%;
        font-family: 'Amatic SC';
        font-size: 2rem;
        width: 27%;
        letter-spacing: 0px;
        transition: all 0.5s ease-in-out;
        font-family: roboto;

        &:hover {
            letter-spacing: 3px;
            background-color: slategray;
            color: white;
        }
    }
`

function DashboardHeader(props){

    return(
        <StyledHeader>
            <h3>{/*USERNAME WILL GO HERE ->*/}(Username)'s Recipe Collection</h3>
                <FlexContainer>
                    <Link to = "/user/dashboard/viewrecipes">View Recipes</Link>
                    <Link to = "/user/dashboard/addrecipe">Add Recipe</Link>
                </FlexContainer>
            {/* DashboardHeader component goes here*/}
        </StyledHeader>
    );
};

export default DashboardHeader;