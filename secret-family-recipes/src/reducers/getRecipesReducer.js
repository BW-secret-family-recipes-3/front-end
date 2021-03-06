const GETTING_RECIPES = "GETTING_RECIPES";
const GET_RECIPES_SUCCESS = "GET_RECIPES_SUCCESS";
const GET_RECIPES_ERROR = "GET_RECIPES_ERROR";

const initialState = {
    inProgress: false,
    userRecipes: [],
    response: {},
    errors: {},
    needsUpdating: false
};

function getRecipesReducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GETTING_RECIPES:
            return {...state, inProgress: true};
        case GET_RECIPES_SUCCESS:
            return {...state, inProgress: false, userRecipes: payload.data, response: payload};
        case GET_RECIPES_ERROR:
            return {...state, inProgress: false, errors: payload};
        default:
            return state;
    };
};

export default getRecipesReducer;