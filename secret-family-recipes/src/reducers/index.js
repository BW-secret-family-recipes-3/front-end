import { combineReducers } from 'redux';
import fetchTokenReducer from './fetchTokenReducer';
import registerUserReducer from './registerUserReducer';
import addRecipeReducer from './addRecipeReducer';
import getRecipesReducers from './getRecipesReducer';


const rootReducer = combineReducers(
    {
        fetchToken: fetchTokenReducer,
        registerUser: registerUserReducer,
        addRecipe: addRecipeReducer,
        getRecipesReducers: getRecipesReducers
    
    });

export default rootReducer;
