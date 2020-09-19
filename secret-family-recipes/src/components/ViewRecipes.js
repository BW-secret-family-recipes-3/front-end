// third party imports
import React from 'react';
import { connect } from "react-redux";

// local imports
import SearchRecipes from './SearchRecipes';
import Recipe from './Recipe';

function ViewRecipes(props){
    const {recipes} = props;
    return(
        <div>
            <h2>View Recipes</h2>
            <SearchRecipes/>
            {/* ViewRecipes component goes here*/}
            <div className = "recipesContainer">
                {recipes.map(r => {
                    return <Recipe key = {r.title} recipe = {r}/>
                })}
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        recipes: state.recipes
    };
}

export default connect(mapStateToProps, {})(ViewRecipes);