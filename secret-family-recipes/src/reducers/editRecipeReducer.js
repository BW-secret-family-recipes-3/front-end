const EDITING_RECIPE = "EDITING_RECIPE";
const EDIT_RECIPE_SUCCESS = "EDIT_RECIPE_SUCCESS";
const EDIT_RECIPE_ERROR = "EDIT_RECIPE_ERROR";

const initialState = {
    inProgress: false,
    recipeToEdit: {},
    editedRecipe: {},
    errors: {},
    response: {}
};

function getRecipesReducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GETTING_RECIPES:
            return {...state, inProgress: true};
        case GET_RECIPES_SUCCESS:
            return {...state, inProgress: false, recipeToEdit: {}, editedRecipe: {}, response: payload};
        case GET_RECIPES_ERROR:
            return {...state, inProgress: false, errors: payload};
        default:
            return state;
    };
};

export default getRecipesReducer;