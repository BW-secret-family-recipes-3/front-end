// third party imports
import React, {useEffect} from 'react';
import { connect } from "react-redux";

// local imports
import SearchRecipes from './SearchRecipes';
import Recipe from './Recipe';
import {getRecipesAction} from '../actions/getRecipes'

function ViewRecipes(props){

    // destructuring prpos
    const {getRecipesAction, tokenState, userState, getRecipes} = props;
    console.log(props);

    // fetching recipes
    useEffect(() => {
        getRecipesAction(tokenState.token, userState.userId)
    },[getRecipes.needsUpdating])

    // if there are recipes in the array...
    const RecipesToDisplay = () => {
        return (
            <div>
                 <SearchRecipes/>
                {getRecipes.userRecipes.map(r => {
                    return <Recipe recipe = {r}/>
                })}
            </div>
        );
    };

    // if no recipes in the array...
    const NoRecipesToDisplay = () => {
        return(
            <div>
                <p>no recipes added yet!</p>
            </div>
        );
    };
    
    return (
        <div>
            <h2>View Recipes</h2>
            <div className = "recipesContainer">
                {getRecipes.userRecipes.length ? RecipesToDisplay() : NoRecipesToDisplay()}
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        userState: state.user,
        tokenState: state.fetchToken,
        getRecipes: state.getRecipes
    };
};

export default connect(mapStateToProps, {getRecipesAction})(ViewRecipes);