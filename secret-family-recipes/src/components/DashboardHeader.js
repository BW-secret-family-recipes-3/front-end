import React from 'react';
import { connect } from "react-redux";
import {BrowserRouter as Router, Link} from "react-router-dom";

function DashboardHeader(props){
    return(
        <div>
            <h3>Dashboard Header</h3>
                <Link to = "/user/dashboard/viewrecipes">View Recipes</Link>
                <Link to = "/user/dashboard/addrecipe">Add Recipe</Link>
            {/* DashboardHeader component goes here*/}
        </div>
    );
};

export default DashboardHeader;