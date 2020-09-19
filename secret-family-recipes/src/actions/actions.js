// Dispatch Constants:

export const FETCHING_TOKEN = "FETCHING_TOKEN";
export const FETCH_TOKEN_SUCCESS = "FETCH_SUCCESS";
export const FETCH_TOKEN_ERROR = "FETCH_TOKEN_ERROR";
export const FETCHING_RECIPES = "FETCHING_RECIPES";
export const FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS";
export const FETCH_RECIPES_ERROR = "FETCH_RECIPES_ERROR";
// ACTIONS

// action to get authorization token. args: credentials from component that calls it
// returns: while token is fetching, sends dispatch to reducer that fetching is in progress
// then calls axios function from utils which makes get request with credentials from login form
// if axios call successfully returns token, dispatches token to reducer to be added to redux state via payload
// if not, dispatches errors to reducer to be added to redux state via payload

export function fetchToken(credentials){
    return function(dispatch){
        dispatch({
            type: FETCHING_TOKEN
        });
        // makes axios call here
        // if successful, dispatch type FETCH_TOKEN_SUCCESS, if not dispatch FETCH_TOKEN_ERROR
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

