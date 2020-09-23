// third party imports
import React, {useEffect} from 'react';
import { connect } from "react-redux";
import {Link, Route, useRouteMatch} from 'react-router-dom';
import styled from 'styled-components';

// local imports
import SearchRecipes from './SearchRecipes';
import Recipe from './Recipe';
import {getRecipesAction} from '../actions/getRecipes';
import {deleteRecipeAction} from '../actions/deleteRecipe';



// Creating some styled components! 

const RecipesContainer = styled.div`

`


function ViewRecipes(props){

    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    // destructuring prpos
    const {getRecipesAction, tokenState, userState, getRecipes} = props;

    // fetching recipes
    useEffect(() => {
        getRecipesAction(token, userId)
    },[props.editRecipe.toggle, props.deleteRecipe.toggle, props.addRecipe.toggle]);

    // delete recipe handler

    const deleteRecipe = (rId) => {
        props.deleteRecipeAction({token: token , recipeId: rId});
        getRecipesAction(token, userId);
    }

    // if there are recipes in the array...
    const RecipesToDisplay = () => {
        return (
            <div>
                <SearchRecipes/>
                {getRecipes.userRecipes.map(r => {
                    return <Recipe key = {r.recipe.id} recipe = {r} deleteRecipe = {deleteRecipe}/>
                })}
            </div>
        );
    };

    // if no recipes in the array...
    const NoRecipesToDisplay = () => {
        return(
            <div>
                <p>no recipes added yet!!</p>
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
        getRecipes: state.getRecipes,
        editRecipe: state.editRecipe,
        deleteRecipe: state.deleteRecipe,
        addRecipe: state.addRecipe

    };
};

export default connect(mapStateToProps, {getRecipesAction, deleteRecipeAction})(ViewRecipes);