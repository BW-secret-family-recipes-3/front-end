//Import dependencies
import React from 'react';
import styled from 'styled-components'
import { BrowserRouter, Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'

//Styled Component
const StyledNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
        font-size: 4rem;
        color: Darkorange;
        margin: 2.5% 5%;
        color: slategray;
        transition: all 0.3s ease-in-out;

        &:hover {
            color: darkorange;
            transition: all 0.3s ease-in-out;
        }
    }

    nav {
        display: flex;
        width: 75%;
        justify-content: flex-end;
        align-items: center;
        
        a {
            margin: 0 3.5%;
            text-decoration: none;
            color: slategray;
            border: 2px solid slategray;
            border-radius: 8px;
            padding: 1.5% 1.5%;
            transition: all 0.3s ease-in-out;

            &:visited {
                color: slategray;
            }

            &:hover {
                color: Darkorange;
                border-color: Darkorange;
                transition: all 0.3s ease-in-out;
            }
        }

        span {
            color: slategray;
            border: 1px solid slategray;
            height: 20px;
        }
    }

`

//NavBar Component
function NavBar(props) {

    const {loggedIn} = props.state 

    const history = useHistory()

    const clickHandler = () => {
        history.push('/')
    }

    const loggedInLinks = () => {
        return (
            <nav>
                <Link to = "/user/dashboard">DASHBOARD</Link>
                <span></span>
                <Link onClick={clickHandler}>LOGOUT</Link>
            </nav>
        )
    }

    const loggedOutLinks = () => {
        return (
            <nav>
                <Link to = "/user/login">LOGIN</Link>
                <span></span>
                <Link to = "/user/register">REGISTER</Link>
            </nav>
        )
    }

    return (
        < StyledNav >
            <FontAwesomeIcon icon={faUtensils} onClick={clickHandler}/>
                {
                    loggedIn ?
                    loggedInLinks()
                    : loggedOutLinks()
                }
        </StyledNav >
    )
}

function mapStateToProps(state) {
    return {
        state: state.fetchToken
    }
}

export default connect(mapStateToProps, {})(NavBar)
    