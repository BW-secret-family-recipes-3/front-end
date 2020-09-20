const initialState = {
    login: {
        username: "",
        password: "",
        errors: ""
    },
    register: {
        username: "",
        password: "",
        errors: ""
    },
    token: "",
    recipeToAdd: {},
    recipeToEdit: {},
    recipes: [
        {
            title: "example recipe Apple Pie",
            source: "Parker",
            ingredients: ["brown sugar", "apples", "lard", "flour", "secret spices"],
            instructions: "Mix flour, lard, and sugar into dough. Make apple filling with secret spices. Bake.",
            categories: ["dessert", "fruit", "decadent"]
        },
        {
            title: "example recipe Potato Latkes",
            source: "Grandma Helen",
            ingredients: ["russet potatos", "sour cream", "neutral oil", "chives", "egg whites"],
            instructions: "Grate potatoes, add egg whites, from into latkes, and shallow fry. Serve with applesauce and sour cream.",
            categories: ["holidays", "channukah", "thanksgiving", "fried"]
        }
    ]
};

function rootReducer(state = initialState, action){
    switch(action.type){
        default:
            return state;
    };
};

export default rootReducer;