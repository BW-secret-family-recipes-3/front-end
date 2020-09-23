import { combineReducers } from 'redux';
import fetchTokenReducer from './fetchTokenReducer';
import registerUserReducer from './registerUserReducer';
import addRecipeReducer from './addRecipeReducer';
import getRecipesReducers from './getRecipesReducer';
import editRecipeReducer from './editRecipeReducer';
import deleteRecipeReducer from './deleteRecipeReducer';
import getUserReducer from './getUserReducer';
import logoutReducer from './logoutReducer';


const rootReducer = combineReducers(
    {
        fetchToken: fetchTokenReducer,
        registerUser: registerUserReducer,
        addRecipe: addRecipeReducer,
        getRecipes: getRecipesReducers,
        editRecipe: editRecipeReducer,
        deleteRecipe: deleteRecipeReducer,
        user: getUserReducer,
        logout: logoutReducer
    });

export default rootReducer;
