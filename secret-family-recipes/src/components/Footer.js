import React from 'react';
import {Link, useHistory} from "react-router-dom";
import { connect } from "react-redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import '../index.css';

import {logoutAction} from '../actions/logout'

const githubIcon = <FontAwesomeIcon icon={faGithub}/>


const StyledFooter = styled.footer`
padding: 2%;
color: black;
margin-top: 5%;
background-color: darkorange;
font-family: 'amatic sc';


div:first-of-type {
    display: flex;
    justify-content: center;
    margin-bottom: 5%;
}

a {
    text-decoration: none;
    color: black;
    font-size: 3rem;
}

svg {
    font-size: 4rem;
}

p {
    display: inline-block;
    margin: 0 2%;
    font-size: 4.5rem;
}

nav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    svg {
        font-size: 3rem;
    }

    a:last-of-type {
        
        transition: all 0.3s ease-in-out;
        justify-self: flex-start;
        color: white;
        text-shadow: 2px 1px 2px black;
        
        
        &:hover {
            text-shadow: 2px 1px 2px white;
            color: black;
        }
    }
    


    a:nth-of-type(2), a:first-of-type {
            color: white;
            margin: 0 5%;
            text-decoration: none;
            border: 2px solid white;
            border-radius: 8px;
            padding: 1.5% 1.5%;
            transition: all 0.3s ease-in-out;
            background-color: darkorange;

            &:hover {
                color: black;
                border-color: black;
                transition: all 0.3s ease-in-out;
            }
    }
}
`

function Footer(props){

    const loggedIn = localStorage.getItem('token') ? true : false;
    const history = useHistory()

    const logOutHandler = (e) => {
        e.preventDefault();
        props.logoutAction();
        history.push('/')
    }

    const loggedInLinks = () => {
        return (
            <StyledFooter className='footer'>
                <FontAwesomeIcon icon={faUtensils} />
                <p>SECRET FAMILY RECIPES</p>
                <nav>
                    <Link to = "/user/dashboard">Dashboard</Link>
                    <Link onClick = {logOutHandler}>Logout</Link>
                    <a href='https://github.com/BW-secret-family-recipes-3' target='_blank'>
                        GitHub {githubIcon}</a>
                </nav>
            </StyledFooter>
        );
    };
    
    const loggedOutLinks = () => {
        return (
            <StyledFooter className='footer'>
                <div>
                <FontAwesomeIcon icon={faUtensils} />
                <p>SECRET FAMILY RECIPES</p>
                </div>
                <nav>
                    <Link to = "/user/login">LOGIN</Link>
                    <Link to = "/user/register">SIGN UP</Link>
                    <a href='https://github.com/BW-secret-family-recipes-3' target='_blank'>
                        GitHub {githubIcon}</a>
                </nav>
            </StyledFooter>
        );   
    };


    return(
        
           loggedIn ? loggedInLinks() : loggedOutLinks()
    );
};

function mapStateToProps(state) {
    return {
        state: state.fetchToken,
        logout: state.logout
    };
};

export default connect(mapStateToProps, {logoutAction})(Footer);