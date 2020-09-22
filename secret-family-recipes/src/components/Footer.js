import React from 'react';
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import '../index.css';

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

    svg {
        font-size: 3rem;
    }

    a:last-of-type {
        text-shadow: 2px 1px 2px white;
        transition: all 0.3s ease-in-out;
        justify-self: flex-start;
        
        
        &:hover {
            color: white;
            text-shadow: 2px 1px 2px black;
        }
    }
    


    a:nth-of-type(2), a:first-of-type {
            color: black;
            margin: 0 5%;
            text-decoration: none;
            border: 2px solid black;
            border-radius: 8px;
            padding: 1.5% 1.5%;
            transition: all 0.3s ease-in-out;
            background-color: white;

            &:hover {
                color: darkorange;
                border-color: white;
                background-color: black;
                transition: all 0.3s ease-in-out;
            }
    }
}
`

function Footer(props){

    const {loggedIn} = props.state;

    const loggedInLinks = () => {
        return (
            <StyledFooter>
                <FontAwesomeIcon icon={faUtensils} />
                <p>SECRET FAMILY RECIPES</p>
                <nav>
                    <Link to = "/user/dashboard">Dashboard</Link>
                    <Link to = "/user/logout">Logout</Link>
                    <a href='https://github.com/BW-secret-family-recipes-3' target='_blank'>
                        GitHub {githubIcon}</a>
                </nav>
            </StyledFooter>
        );
    };
    
    const loggedOutLinks = () => {
        return (
            <StyledFooter>
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
        <div>
           {loggedIn ? loggedInLinks() : loggedOutLinks()}
        </div>
    );
};

function mapStateToProps(state) {
    return {
        state: state.fetchToken
    };
};

export default connect(mapStateToProps, {})(Footer);