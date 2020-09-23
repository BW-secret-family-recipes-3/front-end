const LOGGING_OUT = "LOGGING_OUT";
const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
const LOGOUT_ERROR = "LOGOUT_ERROR";

const initialState = {
    inProgress: false,
    loggedOut: false
};

function logoutReducer(state = initialState, action){
    switch(action.type){
        case LOGGING_OUT:
            return {...state, inProgress: true};
        case LOGOUT_SUCCESS:
            return {...state, inProgress: false, loggedOut: true};
        case LOGOUT_ERROR:
            return {...state, inProgress: false, loggedOut: false};
        default:
            return state;
    };
};

export default logoutReducer;