import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import { connect } from "react-redux";

const loggedInLinks = () => {
    return (
        <div>
            <Link to = "/user/dashboard">Dashboard</Link>
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

function NavBar(props){
    return(
        <div>
           {loggedOutLinks()}
        </div>
    );
};

export default NavBar;