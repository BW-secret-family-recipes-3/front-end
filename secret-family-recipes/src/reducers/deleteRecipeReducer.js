const DELETING_RECIPE = "DELETING_RECIPE";
const DELETE_RECIPE_SUCCESS = "DELETE_RECIPE_SUCCESS";
const DELETE_RECIPE_ERROR = "DELETE_RECIPE_ERROR";

const initialState = {
    inProgress: false,
    recipeToDelete: {},
    response: {},
    errors: {},
    recipeDeleteToggle: false
};

function deleteRecipeReducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case DELETING_RECIPE:
            return {...state, inProgress: true};
        case DELETE_RECIPE_SUCCESS:
            return {...state, inProgress: false, recipeToDelete: {}, response: payload, recipeDeleteToggle: !state.recipeDeleteToggle};
        case DELETE_RECIPE_ERROR:
            return {...state, inProgress: false, errors: payload, recipeDeleteToggle: !state.recipeDeleteToggle};
        default:
            return state;
    };
};

export default deleteRecipeReducer;