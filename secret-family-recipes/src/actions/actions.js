import { makeLoginReq } from '../utils/crudOps'

// Dispatch Constants:

const FETCHING_TOKEN = "FETCHING_TOKEN";
const FETCH_TOKEN_SUCCESS = "FETCH_SUCCESS";
const FETCH_TOKEN_ERROR = "FETCH_TOKEN_ERROR";
const FETCHING_RECIPES = "FETCHING_RECIPES";
const FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS";
const FETCH_RECIPES_ERROR = "FETCH_RECIPES_ERROR";
// ACTIONS

// action to get authorization token. args: credentials from component that calls it
// returns: while token is fetching, sends dispatch to reducer that fetching is in progress
// then calls axios function from utils which makes get request with credentials from login form
// if axios call successfully returns token, dispatches token to reducer to be added to redux state via payload
// if not, dispatches errors to reducer to be added to redux state via payload

export function fetchToken(credentials){
    console.log('in fetch token');
    makeLoginReq(credentials);
    return function(dispatch){
        
        dispatch({
            type: FETCHING_TOKEN
        })
        
            // .then(res => {
            //     console.log('in fetchToken success success')
            //     console.log(res);
            //     return dispatch({ 
            //         type: FETCH_TOKEN_SUCCESS, 
            //         payload: res
            //     });
            // })
            // .catch (err => {
            //     console.log('in fetchToken error')
            //     console.log(err);
            //     return dispatch ({
            //         type: FETCH_TOKEN_ERROR,
            //         payload: err
            //     });
            // });
    };
};

// action to get users recipes from API: args: token from redux state
// returns: while fetching, returns a dispatch that fetching is in progress
// then calls axios function from utils which makes get request using token from redux state
// if axios call succeedes, dispatches success to reducer which sets recipes from payload to redux state
// if not, dispatches errors to reducer to be added to redux state via payload

export function fetchRecipes(token){
    return function(dispatch){
        dispatch({
            type: FETCHING_RECIPES
        });
        // makes axios call here
        // if successful, dispatch type FETCH_RECIPES_SUCCESS, if not dispatch FETCH_RECIPES_ERROR
    }
};

// actions to be made: 
// 1) post credentials for register
// 2) post recipe for adding recipe
// 3) put recipe for editing recipe
// 4) delete recipe for deleting recipe
// 5) filtering recipe for searching recipes

