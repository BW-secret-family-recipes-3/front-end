// third party imports
import React, {useEffect} from 'react';
import { connect } from "react-redux";

// local imports
import SearchRecipes from './SearchRecipes';
import Recipe from './Recipe';
// will move to login component 
import { fetchToken } from '../actions/fetchToken';
import { registerUserAction } from '../actions/registerUser'

function ViewRecipes(props){

    const {recipes, credentials, auth} = props;
    // will move to login component 
    const handleClick = () => {
        props.fetchToken({username: 'user2', password: 'password2'});
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

export default connect(mapStateToProps, {fetchToken, registerUserAction})(ViewRecipes);