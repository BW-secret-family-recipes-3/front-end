import { deleteRecipeReq }from '../utils/crudOps'

const DELETING_RECIPE = "DELETING_RECIPE";
const DELETE_RECIPE_SUCCESS = "DELETE_RECIPE_SUCCESS";
const DELETE_RECIPE_ERROR = "DELETE_RECIPE_ERROR";

export const deleteRecipeAction = ({token, recipeID}) => dispatch => {
    dispatch({type: DELETING_RECIPE});
    deleteRecipeReq({token, recipeID})
        .then(res => {
            console.log(res);
            dispatch({type: DELETE_RECIPE_SUCCESS, payload: res});
        })
        .catch(err => {
            console.log(err);
            dispatch({type: DELETE_RECIPE_ERROR, payload: err});
        });
};
   