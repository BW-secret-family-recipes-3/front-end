export const exampleRecipes = [{
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
}];

const handleRegisterClick = () => {
    console.log('in second handle click');
    const user1 = {
        username: 'user1',
        password: 'password123',
        email: 'williamajherman@gmail.com',
        name: 'User One'
    }
    Axios.post('https://secret-family-backend.herokuapp.com/api/auth/register', user1)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }