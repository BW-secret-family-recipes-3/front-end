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
import {editRecipeAction} from '../actions/editRecipe';



// Creating some styled components! 

const RecipesContainer = styled.div`

`


function ViewRecipes(props){

    const token = localStorage.getItem('token');

    const userId = localStorage.getItem('userId');


    // destructuring prpos
    

    // fetching recipes
    useEffect(() => {
        props.getRecipesAction(token, userId)
    },[props.editRecipe.toggle, props.deleteRecipe.toggle, props.addRecipe.toggle]);


    // delete recipe handler

    const deleteRecipe = (rId) => {
        props.deleteRecipeAction({token: token , recipeId: rId});
    }

    // edit recipe handler

    const editRecipe = (recipeObj, rId) => {
        props.editRecipeAction({editedRecipe: recipeObj, token: token, recipeId: rId});
    }

    // if there are recipes in the array...
    const RecipesToDisplay = (props) => {
        return (
            <div>
                <SearchRecipes recipes={props.recipes}/>
                {props.recipes.map(r => {
                    return <Recipe key = {r.recipe.id} recipe = {r} deleteRecipe = {deleteRecipe} editRecipe = {editRecipe}/>
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
                {props.getRecipes.userRecipes.length ? <RecipesToDisplay recipes = {props.getRecipes.userRecipes}/> : <NoRecipesToDisplay/>}
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

export default connect(mapStateToProps, {getRecipesAction, deleteRecipeAction, editRecipeAction})(ViewRecipes);