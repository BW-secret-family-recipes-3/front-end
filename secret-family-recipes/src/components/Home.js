//Import dependencies
import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import styled from 'styled-components'

//Import components
import NavBar from './NavBar'

// const StyledHeader = styled.div`
//     display: flex;
//     flex-direction: column;
//     height: 40vh;
//     border: 1px solid black;
//     color: ${pr => pr.theme.primaryColor};
// `



function Home(props){
    return(
        <div>
            {/* Nav Bar component goes here */}
                <NavBar></NavBar>
            
            {/* div with login/register button */}
            
                <Link to='/user/login'>Login</Link>
                <Link to ='/user/register'>Register</Link>
            
            {/* div with image card gallery */}
            {/* footer bar */}
        </div>
    );
};

export default Home;