// third party imports
import React, {useEffect} from 'react';
import { connect } from "react-redux";

// local imports
import SearchRecipes from './SearchRecipes';
import Recipe from './Recipe';
// will move to login component 
import {fetchToken} from '../actions/actions';
import Axios from 'axios';

function ViewRecipes(props){

    const {recipes, credentials, auth} = props;
    // will move to login component 
    const handleClick = async () => {
        console.log('in handleClick');
         // return fetchToken({username: credentials.username, password: credentials.password});
         console.log(credentials.password);
         console.log(credentials.username);
         await Axios.post('https://secret-family-backend.herokuapp.com/api/auth/login', {username: 'user1', password: 'password123'})
            .then(res => {
                console.log(res);
            })
            .catch (err => {
                console.log(err);
            })
    };

    const handleRegisterClick = () => {
            console.log('in second handle click');
            const user1 = {
                username: 'user1',
                password: 'password123',
                email: 'williamajherman@gmail.com',
                name: 'User One'
            }
            Axios.post('https://secret-family-backend.herokuapp.com/api/auth/register', user1)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
            }


   
    return (
        <div>
            <h2>View Recipes</h2>
            <SearchRecipes/>
            {/* ViewRecipes component goes here*/}
            <div className = "recipesContainer">
                {recipes.map(r => {
                    return <Recipe key = {r.title} recipe = {r}/>
                })}
            </div>
            <div className = "temporaryLogInButton">
                <button onClick = {e => {
                    e.preventDefault();
                    handleClick();
                }}
                >Temp Login
                </button>
                <button onClick = {e=> {
                    e.preventDefault();
                    handleRegisterClick();
                }}>Register User 1

                </button>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        recipes: state.recipes,
        // will move to login component 
        credentials: state.login,
        auth: state.auth
    };
};

export default connect(mapStateToProps, {fetchToken})(ViewRecipes);