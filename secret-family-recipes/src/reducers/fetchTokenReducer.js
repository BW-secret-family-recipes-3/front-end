const FETCHING_TOKEN = "FETCHING_TOKEN";
const FETCH_TOKEN_SUCCESS = "FETCH_SUCCESS";
const FETCH_TOKEN_ERROR = "FETCH_TOKEN_ERROR";

const initialState = {
    inProgress: false,
    token: '',
    errors: {},
    response: {},
    tokenTime: 0,
    loggedIn: false
};

function fetchTokenReducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case FETCHING_TOKEN:
            return {...state, inProgress: true};
        case FETCH_TOKEN_SUCCESS:
            return {...state, inProgress: false, response: payload};
        case FETCH_TOKEN_ERROR:
            return {...state, inProgress: false, errors: payload};
        default:
            return state;
    };
};

export default fetchTokenReducer;