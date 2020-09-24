import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import Recipe from './Recipe';

// Dummy Data!

// export const exampleRecipes = [{
//     title: "example recipe Apple Pie",
//     source: "Parker",
//     ingredients: ["brown sugar", "apples", "lard", "flour", "secret spices"],
//     instructions: "Mix flour, lard, and sugar into dough. Make apple filling with secret spices. Bake.",
//     categories: ["dessert", "fruit", "decadent"]
// },
// {
//     title: "example recipe Potato Latkes",
//     source: "Grandma Helen",
//     ingredients: ["russet potatos", "sour cream", "neutral oil", "chives", "egg whites"],
//     instructions: "Grate potatoes, add egg whites, from into latkes, and shallow fry. Serve with applesauce and sour cream.",
//     categories: ["holidays", "channukah", "thanksgiving", "fried"]
// },
// {
//     title: 'example recipe number three',
//     source: 'Gordon Ramsay',
//     ingredients: ['this', 'that', 'wow', 'why?', 'eggs'],
//     instructions: 'First you do this, then you do that, then you cook it and eat it and wow',
//     categories: ['everyday', 'tomorrow', 'today', 'huh?', 'now']
// },
// {
//     title: 'Pizza',
//     source: 'Papa John',
//     ingredients: ['Dough', 'Cheese', 'Sauce', 'Pepperoni'],
//     instructions: 'First you make the dough, then put the sauce on it. Put the cheese and pepperoni on top and throw it in the oven until it\'s done',
//     categories: ['everyday', 'breakfast', 'lunch', 'dinner']
// }];

// const initialSearchValues = {
//     healthy: false,
//     appetizer: false,
//     pastry: false,
//     salad: false,
//     soup: false,
//     snack: false,
//     side: false,
//     sandwich: false,
//     vegan: false,
//     lowCarb: false,
//     crockpot: false,
//     mainCourse: false,
//     quick: false,
//     custom: ''

// }


function SearchRecipes(props){
    const {getRecipes} = props;
//     const [searchValues, setSearchValues] = useState(initialSearchValues);
    const [collapsed, setCollapsed] = useState(true);
//     const [filteredRecipes, setFilteredRecipes] = useState([]);

//     const onChange = e => {
//         const {name, value, checked, type} = e.target;
//         const newValue = type === 'checkbox' ? checked : value;
//         change(name, newValue)
//     };

//     const change = (name, value) => {
//         // validate(name, value);
//         setSearchValues({
//             ...searchValues, 
//             [name]: value
//         })
//     };




//     const onSubmit = e => {
//         e.preventDefault();
//         // Getting search items from form
//         const searchForArr = [];
//         for (let prop in searchValues) {
//             if (prop === 'custom') {
//                 searchForArr.push(searchValues[prop].toString().toLowerCase())
//             } else if (searchValues[prop] === true) {
//                 console.log(prop)
//                 searchForArr.push(prop.toLowerCase())
//             }
//         }
//         console.log(searchForArr)
//         let searchedRecipes = [];
//         props.recipes.forEach(rec=>{
//             console.log(searchForArr)
//             console.log(rec)
//             const categoryArray = rec.recipe.category.split(',').map(word=>word.toLowerCase());
//             let count = 0;
//             console.log(categoryArray)
//             for (let i = 0; i < searchForArr.length; i++) { 
//                 for (let j = 0; j < categoryArray.length; j++) {
//                 if (searchForArr[i] === categoryArray[j]) {
//                     searchedRecipes.push(rec)
//                 }
//             }
//             }
//             return count > 0
//         });
//         console.log(searchedRecipes);
//         setFilteredRecipes(searchedRecipes);
//         setSearchValues(initialSearchValues);
//     };


    // console.log(props.recipe)

    console.log(getRecipes.userRecipes);
    return(
        <div>
            <button onClick={()=>{
                collapsed ? setCollapsed(false) : setCollapsed(true)
            }}>SEARCH RECIPES</button>
            {!collapsed && 
            <>
            <form onSubmit={() => {}}>
                <div>

                </div>
                {getRecipes.userRecipes.map((rec, idx1) => {
                    return(
                        <span key = {idx1}>
                            {rec.recipe.category.split(',').map((cat, idx2) => {
                                return (
                                    <label key = {idx2} htmlFor= {cat}>{cat}
                                    <input
                                    type='checkbox'
                                    name={cat}
                                    checked={false}
                                    onChange={() => {}} 
                                    />
                                </label>
                                )
                            })}
                        </span>
                    )})}
                <button>SEARCH</button>
            </form>
            {/* SearchRecipes component goes here*/}
            </>
            }
            {/* {filteredRecipes.map(rec=>{
                return (
                    <div style={{border: 'solid 1px black', margin: '1%'}}>
                    <p>{rec.recipe.title}</p>
                    </div>
                )
            })}       */}
        </div>
    );
};

function mapStateToProps(state) {
    return {
        getRecipes: state.getRecipes
    };
};

export default connect(mapStateToProps, {})(SearchRecipes);