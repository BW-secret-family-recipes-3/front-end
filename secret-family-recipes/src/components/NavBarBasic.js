import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import { connect } from "react-redux";



function NavBar(props){

    const {loggedIn} = props.state;

    const loggedInLinks = () => {
        return (
            <div>
                <Link to = "/user/dashboard">Dashboard</Link>
                <Link to = "/user/logout">Logout</Link>
            </div>
        );
    };
    
    const loggedOutLinks = () => {
        return (
            <div>
                <Link to = "/user/login">Login</Link>
                <Link to = "/user/register">Register</Link>
            </div>
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

export default connect(mapStateToProps, {})(NavBar);