const DELETING_RECIPE = "DELETING_RECIPE";
const DELETE_RECIPE_SUCCESS = "DELETE_RECIPE_SUCCESS";
const DELETE_RECIPE_ERROR = "DELETE_RECIPE_ERROR";

const initialState = {
    inProgress: false,
    recipeToDelete: {},
    response: {},
    errors: {},
    toggle: false

};

function deleteRecipeReducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case DELETING_RECIPE:
            return {...state, inProgress: true};
        case DELETE_RECIPE_SUCCESS:
            return {...state, inProgress: false, recipeToDelete: {}, response: payload, toggle: !state.toggle};
        case DELETE_RECIPE_ERROR:
            return {...state, inProgress: false, errors: payload, toggle: !state.toggle};
        default:
            return state;
    };
};

export default deleteRecipeReducer;