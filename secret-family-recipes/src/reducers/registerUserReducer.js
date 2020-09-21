const REGISTERING_USER = "REGISTERING_USER";
const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";

const initialState = {
    inProgress: false,
    respnse: {},
    errors: {}
};

function registerUserReducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case REGISTERING_USER:
            return {...state, inProgress: true};
        case REGISTER_USER_SUCCESS:
            return {...state, inProgress: false, response: payload};
        case REGISTER_USER_ERROR:
            return {...state, inProgress: false, errors: payload};
        default:
            return state;
    };
};

export default registerUserReducer;