import { combineReducers } from 'redux';
import fetchTokenReducer from './fetchTokenReducer';
import registerUserReducer from './registerUserReducer';
import addRecipeReducer from './addRecipeReducer';
import getRecipesReducers from './getRecipesReducer';
import editRecipeReducer from './editRecipeReducer';


const rootReducer = combineReducers(
    {
        fetchToken: fetchTokenReducer,
        registerUser: registerUserReducer,
        addRecipe: addRecipeReducer,
        getRecipesReducers: getRecipesReducers,
        editRecipeReducer: editRecipeReducer
    
    });

export default rootReducer;
