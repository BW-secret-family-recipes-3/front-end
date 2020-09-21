// third-party imports
import axios from 'axios';

// api calls go here

// makeloginReq: 

export async function makeLoginReq(args) {
    const {username, password} = args;
    const URL = 'https://secret-family-backend.herokuapp.com/api/auth/login';

    return await axios.post(URL, {
        username: username,
        password: password
    });
}; 

// makeRegReq:

export async function makeRegReq(args) {
    const {username, password, email, name} = args;
    const URL = 'https://secret-family-backend.herokuapp.com/api/auth/register';
    
    return await axios.post(URL, {
        username: username,
        password: password,
        email: email,
        name: name
    });
};

// addRecipeReq:

export async function addRecipeReq(args) {
    const {recipe, token} = args;
    const URL = 'https://secret-family-backend.herokuapp.com/api/users/recipes';
    const header = {Authorization: token};

    return await axios.post(URL, recipe, {headers: header});
}

// getRecipesReq

export async function getRecipesReq(args){
    const {token, userID} = args;
    const URL = `https://secret-family-backend.herokuapp.com/api/users/${userID}/recipes`;
    const header = {Authorization: token};

    return await axios.get(URL, {headers: header});

}


// editRecipeReq:

export async function editRecipeReq(args) {
    const {editedRecipe, token, recipeID} = args;
    const URL = `https://secret-family-backend.herokuapp.com/api/users/recipes/:${recipeID}`;
    const header = {Authorization: token};

    return await axios.put(URL, editedRecipe, {headers: header});
}

// deleteRecipeReq:

export async function deleteRecipeReq(args){
    const {token, recipeID} = args;
    const URL = `https://secret-family-backend.herokuapp.com/api/users/recipes/:${recipeID}`;
    const header = {Authorization: token};

    return await axios.delete(URL, {headers: header});
};
