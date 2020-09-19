const initialState = {
    login: {
        username: '',
        password: '',
        errors: ''
    },
    register: {
        username: '',
        password: '',
        errors: ''
    },
    recipes: []
};

function rootReducer(state = initialState, action){
    switch(action.type){
        default:
            return state;
    };
};

export default rootReducer;