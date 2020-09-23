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



// DUMMY DATA!
const exampleRecipes = [{
    title: "example recipe Apple Pie",
    source: "Parker",
    ingredients: ["brown sugar", "apples", "lard", "flour", "secret spices"],
    instructions: "Mix flour, lard, and sugar into dough. Make apple filling with secret spices. Bake.",
    categories: ["dessert", "fruit", "decadent"]
},
{
    title: "example recipe Potato Latkes",
    source: "Grandma Helen",
    ingredients: ["russet potatos", "sour cream", "neutral oil", "chives", "egg whites"],
    instructions: "Grate potatoes, add egg whites, from into latkes, and shallow fry. Serve with applesauce and sour cream.",
    categories: ["holidays", "channukah", "thanksgiving", "fried"]
},
{
    title: 'example recipe number three',
    source: 'Gordon Ramsay',
    ingredients: ['this', 'that', 'wow', 'why?', 'eggs'],
    instructions: 'First you do this, then you do that, then you cook it and eat it and wow',
    categories: ['everyday', 'tomorrow', 'today', 'huh?', 'now']
},
{
    title: 'Pizza',
    source: 'Papa John',
    ingredients: ['Dough', 'Cheese', 'Sauce', 'Pepperoni'],
    instructions: 'First you make the dough, then put the sauce on it. Put the cheese and pepperoni on top and throw it in the oven until it\'s done',
    categories: ['everyday', 'breakfast', 'lunch', 'dinner']
}];

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
    },[getRecipes.needsUpdating]);

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
        getRecipes: state.getRecipes
    };
};

export default connect(mapStateToProps, {getRecipesAction, deleteRecipeAction})(ViewRecipes);