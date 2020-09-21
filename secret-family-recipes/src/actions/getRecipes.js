import { getRecipesReq }from '../utils/crudOps'

const GETTING_RECIPES = "GETTING_RECIPES";
const GET_RECIPES_SUCCESS = "GET_RECIPES_SUCCESS";
const GET_RECIPES_ERROR = "GET_RECIPES_ERROR";

export const getRecipesAction = (token) => dispatch => {
    dispatch({type: GETTING_RECIPES});
    getRecipesReq(token)
        .then(res => {
            dispatch({type: GET_RECIPES_SUCCESS, payload: res});
        })
        .catch(err => {
            dispatch({type: GET_RECIPES_ERROR, payload: err});
        });
};
   