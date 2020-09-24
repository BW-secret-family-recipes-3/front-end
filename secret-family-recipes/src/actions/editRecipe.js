import { editRecipeReq }from '../utils/crudOps'

const EDITING_RECIPE = "EDITING_RECIPE";
const EDIT_RECIPE_SUCCESS = "EDIT_RECIPE_SUCCESS";
const EDIT_RECIPE_ERROR = "EDIT_RECIPE_ERROR";

export const editRecipeAction = ({editedRecipe, token, recipeID}) => dispatch => {
    dispatch({type: EDITING_RECIPE});
    editRecipeReq({editedRecipe, token, recipeID})
        .then(res => {
            dispatch({type: EDIT_RECIPE_SUCCESS, payload: res});
        })
        .catch(err => {
            dispatch({type: EDIT_RECIPE_ERROR, payload: err});
        });
};