import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components'

const StyledHeader = styled.div`
    color: red;
`

function Home(props){
    return(
        <div>
            {/* Nav Bar component goes here */}
            {/* div with login/register button */}
            <StyledHeader>Test</StyledHeader>
            {/* div with image card gallery */}
            {/* footer bar */}
        </div>
    );
};

export default Home;