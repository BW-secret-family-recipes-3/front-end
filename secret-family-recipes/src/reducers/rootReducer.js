const FETCHING_TOKEN = "FETCHING_TOKEN";
const FETCH_TOKEN_SUCCESS = "FETCH_SUCCESS";
const FETCH_TOKEN_ERROR = "FETCH_TOKEN_ERROR";
const FETCHING_RECIPES = "FETCHING_RECIPES";
const FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS";
const FETCH_RECIPES_ERROR = "FETCH_RECIPES_ERROR";

const initialState = {
    login: {
        username: "TestingNew",
        password: "Testing123",
        errors: ""
    },
    register: {
        username: "",
        password: "",
        errors: ""
    },
    auth: {
        inProgress: false,
        token: '',
        errors: {},
        response: {},
        tokenTime: 0,
        loggedIn: false
    },
    recipes: {
        recipeToAdd: {},
        recipeToEdit: {},
        allRecipes: [],
        filteredRecipes: []
    }
};
   

function rootReducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case FETCHING_TOKEN:
            return {...state, auth: {...state.auth, inProgress: true}};
        case FETCH_TOKEN_SUCCESS:
            return {...state, auth: {...state.auth, inProgress: false, response: payload}};
        case FETCH_TOKEN_ERROR:
            return {...state, auth: {...state.auth, inProgress: false, errors: payload}};
        default:
            return state;
    };
};

export default rootReducer;