import {getUserReq} from '../utils/crudOps';

const GETTING_USER = "GETTING_USER";
const GET_USER_SUCCESS = "GET_USER_SUCCESS";
const GET_USER_ERROR = "GET_USER_ERROR";

export const getRecipesAction = (token) => dispatch => {
    dispatch({type: GETTING_USER});
    getUserReq(token)
        .then(res => {
            dispatch({type: GET_USER_SUCCESS, payload: res});
        })
        .catch(err => {
            dispatch({type: GET_USER_ERROR, payload: err});
        });
};