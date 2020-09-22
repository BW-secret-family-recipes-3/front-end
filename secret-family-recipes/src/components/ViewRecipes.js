// third party imports
import React, {useEffect} from 'react';
import { connect } from "react-redux";
import {Link, Route, useRouteMatch} from 'react-router-dom';
import styled from 'styled-components';

// local imports
import SearchRecipes from './SearchRecipes';
import Recipe from './Recipe';
// will move to login component 
import { fetchTokenAction } from '../actions/fetchToken';
import { registerUserAction } from '../actions/registerUser';



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



function ViewRecipes(props){

    const {recipes, credentials, auth} = props;
    // will move to login component 
    const handleClick = () => {
        props.fetchTokenAction({username: 'user2', password: 'password2'});
    };

    const tempUser = {
        username: 'user2',
        password: 'password2',
        email: 'user2@user2.com',
        name: 'USER2'
    };

    const handleClickReg = () => {
        props.registerUser(tempUser)
    }


   
    return (
        <div>
            <h2>View Recipes</h2>
            <div>
                {exampleRecipes.map(rec=>{
                    return (
                        <Recipe recipe={rec}/>
                    )
                })}
            </div>
            <SearchRecipes/>
            {/* ViewRecipes component goes here*/}
            <div className = "recipesContainer">
                {/* {recipes.map(r => {
                    return <Recipe key = {r.title} recipe = {r}/>
                })} */}
            </div>
            <div className = "temporaryLogInButton">
                <button onClick = {e => {
                    e.preventDefault();
                    handleClick();
                }}
                >Temp Login
                </button>
                <button onClick = {e => {
                    e.preventDefault();
                    handleClickReg();
                }}
                >Temp Register
                </button>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        state: state
    };
};

export default connect(mapStateToProps, {fetchTokenAction, registerUserAction})(ViewRecipes);