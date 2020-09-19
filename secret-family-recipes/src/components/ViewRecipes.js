// third party imports
import React from 'react';
import { connect } from "react-redux";

// local imports
import SearchRecipes from './SearchRecipes'

function ViewRecipes(props){
    return(
        <div>
            <h2>View Recipes</h2>
            <SearchRecipes/>
            {/* ViewRecipes component goes here*/}
        </div>
    );
};

export default ViewRecipes;