// third party imports
import React, {useEffect} from 'react';
import { connect } from "react-redux";

// local imports
import SearchRecipes from './SearchRecipes';
import Recipe from './Recipe';
import {getRecipesAction} from '../actions/getRecipes'

function ViewRecipes(props){

    const {getRecipesAction, tokenState, userState, getRecipes} = props;
    console.log(props);

    useEffect(() => {
        getRecipesAction(tokenState.token, userState.userId)
    },[getRecipes.needsUpdating])

    return (
        <div>
            <h2>View Recipes</h2>
            <SearchRecipes/>
            {/* ViewRecipes component goes here*/}
            <div className = "recipesContainer">
                {/* {recipes.map(r => {
                    return <Recipe key = {r.title} recipe = {r}/>
                })} */}
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