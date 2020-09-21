import { combineReducers } from 'redux';
import fetchTokenReducer from './fetchTokenReducer'
import registerUserReducer from './registerUserReducer'

const rootReducer = combineReducers(
    {
        fetchToken: fetchTokenReducer,
        registerUser: registerUserReducer
    
    });

export default rootReducer;
