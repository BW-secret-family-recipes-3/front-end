import { getRecipesReq }from '../utils/crudOps'

const GETTING_RECIPES = "GETTING_RECIPES";
const GET_RECIPES_SUCCESS = "GET_RECIPES_SUCCESS";
const GET_RECIPES_ERROR = "GET_RECIPES_ERROR";

export const getRecipesAction = (token, userId) => dispatch => {
    dispatch({type: GETTING_RECIPES});
    getRecipesReq(token, userId)
        .then(res => {
            // console.log(res);
            dispatch({type: GET_RECIPES_SUCCESS, payload: res});
        })
        .catch(err => {
            // console.log(err);
            dispatch({type: GET_RECIPES_ERROR, payload: err});
        });
};
   