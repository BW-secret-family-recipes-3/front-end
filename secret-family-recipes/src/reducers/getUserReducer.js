const GETTING_USER = "GETTING_USER";
const GET_USER_SUCCESS = "GET_USER_SUCCESS";
const GET_USER_ERROR = "GET_USER_ERROR";

const initialState = {
    inProgress: false,
    errors: {},
    response: {},
    userId: ''
};

function getUserReducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GETTING_USER:
            return {...state, inProgress: true};
        case GET_USER_SUCCESS:
            return {...state, inProgress: false, response: payload};
        case GET_USER_ERROR:
            return {...state, inProgress: false, errors: payload};
        default:
            return state;
    };
};

export default getUserReducer;