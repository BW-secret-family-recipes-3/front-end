import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'

// const StyledHeader = styled.div`
//     display: flex;
//     flex-direction: column;
//     height: 40vh;
//     border: 1px solid black;
//     color: ${pr => pr.theme.primaryColor};
// `

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;

`

function Home(props){
    return(
        <div>
            {/* Nav Bar component goes here */}
                <StyledNav>
                    <FontAwesomeIcon icon={faUtensils}/>
                    <nav>
                    <Link to='/user/login'>Login</Link>
                    <Link to ='/user/register'>Register</Link>
                    </nav>
                </StyledNav>
            
            {/* div with login/register button */}
            
                <Link to='/user/login'>Login</Link>
                <Link to ='/user/register'>Register</Link>
            
            {/* div with image card gallery */}
            {/* footer bar */}
        </div>
    );
};

export default Home;