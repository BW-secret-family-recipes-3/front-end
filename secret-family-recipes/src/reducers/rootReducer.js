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
        response: {}
    },
    recipeToAdd: {},
    recipeToEdit: {},
    recipes: [
        {
            title: "example recipe Apple Pie",
            source: "Parker",
            ingredients: ["brown sugar", "apples", "lard", "flour", "secret spices"],
            instructions: "Mix flour, lard, and sugar into dough. Make apple filling with secret spices. Bake.",
            categories: ["dessert", "fruit", "decadent"]
        },
        {
            title: "example recipe Potato Latkes",
            source: "Grandma Helen",
            ingredients: ["russet potatos", "sour cream", "neutral oil", "chives", "egg whites"],
            instructions: "Grate potatoes, add egg whites, from into latkes, and shallow fry. Serve with applesauce and sour cream.",
            categories: ["holidays", "channukah", "thanksgiving", "fried"]
        }
    ],
    filteredRecipes: []
};

function rootReducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case FETCHING_TOKEN:
            return {...state, auth: {inProgress: true}};
        case FETCH_TOKEN_SUCCESS:
            return {...state, auth: {inProgress: false, response: payload}};
        case FETCH_TOKEN_ERROR:
            return {...state, auth: {inProgress: false, errors: payload}};
        default:
            return state;
    };
};

export default rootReducer;