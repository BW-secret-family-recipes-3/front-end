import { makeLoginReq } from '../utils/crudOps';

const FETCHING_TOKEN = "FETCHING_TOKEN";
const FETCH_TOKEN_SUCCESS = "FETCH_SUCCESS";
const FETCH_TOKEN_ERROR = "FETCH_TOKEN_ERROR";

// action to get authorization token. args: credentials from component that calls it
// returns: while token is fetching, sends dispatch to reducer that fetching is in progress
// then calls axios function from utils which makes get request with credentials from login form
// if axios call successfully returns token, dispatches token to reducer to be added to redux state via payload
// if not, dispatches errors to reducer to be added to redux state via payload

export const fetchTokenAction = (credentials) => dispatch => {
    console.log('in fetch token');
    dispatch({type: FETCHING_TOKEN});
    makeLoginReq(credentials)
        .then(res => {
            dispatch({type: FETCH_TOKEN_SUCCESS, payload: res});
        })
        .catch(err => {
            dispatch({type: FETCH_TOKEN_ERROR, payload: err});
        });
};
   
