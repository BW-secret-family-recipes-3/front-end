import { addRecipeReq }from '../utils/crudOps'

const ADDING_RECIPE = "ADDING_RECIPE";
const ADD_RECIPE_SUCCESS = "ADD_RECIPE_SUCCESS";
const ADD_RECIPE_ERROR = "ADD_RECIPE_ERROR";

export const addRecipeAction = ({recipe, token}) => dispatch => {
    dispatch({type: ADDING_RECIPE});
    addRecipeReq({recipe, token})
        .then(res => {
            dispatch({type: ADD_RECIPE_SUCCESS, payload: res});
        })
        .catch(err => {
            dispatch({type: ADD_RECIPE_ERROR, payload: err});
        });
};
   