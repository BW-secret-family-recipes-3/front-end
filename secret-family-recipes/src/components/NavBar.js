//Import dependencies
import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'

//Styled Component
const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
        font-size: 4rem;
        color: Darkorange;
        margin: 2.5% 5%;
    }

    nav {
        width: 75%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        
        a {
            margin: 0 5%;
            text-decoration: none;
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
export default function NavBar() {
    return (
        < StyledNav >
            <FontAwesomeIcon icon={faUtensils} />
            <nav>
                <Link to='/user/login'>LOGIN</Link>
                <span></span>
                <Link to='/user/register'>SIGN UP</Link>
            </nav>
        </StyledNav >
    )
}
    