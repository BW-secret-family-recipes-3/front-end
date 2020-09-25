import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import Recipe from './Recipe';
import styled from 'styled-components';

// Dummy Data!

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
},
{
    title: 'example recipe number three',
    source: 'Gordon Ramsay',
    ingredients: ['this', 'that', 'wow', 'why?', 'eggs'],
    instructions: 'First you do this, then you do that, then you cook it and eat it and wow',
    categories: ['everyday', 'tomorrow', 'today', 'huh?', 'now']
},
{
    title: 'Pizza',
    source: 'Papa John',
    ingredients: ['Dough', 'Cheese', 'Sauce', 'Pepperoni'],
    instructions: 'First you make the dough, then put the sauce on it. Put the cheese and pepperoni on top and throw it in the oven until it\'s done',
    categories: ['everyday', 'breakfast', 'lunch', 'dinner']
}];

const Button = styled.button`
padding: 1%;
background-color: slategray;
border-radius: 5px;
color: white;
border: solid 1px darkorange;
`

const Checkbox = styled.input`
display: block;
`

const initialSearchValues = {
    healthy: false,
    appetizer: false,
    pastry: false,
    salad: false,
    soup: false,
    snack: false,
    side: false,
    sandwich: false,
    vegan: false,
    lowCarb: false,
    crockpot: false,
    mainCourse: false,
    quick: false,
    custom: ''

}


function SearchRecipes(props){
     const [searchValues, setSearchValues] = useState(initialSearchValues);
    const [collapsed, setCollapsed] = useState(true);
    const [filteredRecipes, setFilteredRecipes] = useState([]);

   console.log(props)




    const onChange = e => {
        const {name, value, checked, type} = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        change(name, newValue)
    };

    const change = (name, value) => {
        // validate(name, value);
        setSearchValues({
            ...searchValues, 
            [name]: value
        })
    };




    const onSubmit = e => {
        e.preventDefault();
        // Getting search items from form
        const searchFor = [];
        for (let prop in searchValues) {
            if (prop === 'custom') {
                searchFor.push(searchValues[prop].toString().toLowerCase())
            } else if (searchValues[prop] === true) {
                console.log(prop)
                searchFor.push(prop.toLowerCase())
            }
        }
        console.log(props)
        let searchedRecipes = [];
        props.recipes.forEach(rec=>{
            console.log(searchFor)
            console.log(rec)
            const categoryArray = rec.recipe.category.split(',').map(word=>word.toLowerCase());
            let count = 0;
            console.log(categoryArray)
            for (let i = 0; i < searchFor.length; i++) { 
                for (let j = 0; j < categoryArray.length; j++) {
                if (searchFor[i] === categoryArray[j]) {
                    searchedRecipes.push(rec)
                }
            }
            }
            return count > 0
        });
        console.log(searchedRecipes);
        setFilteredRecipes(searchedRecipes);
        setSearchValues(initialSearchValues);
    };


    
    return(
        <div>
            <Button onClick={()=>{
                collapsed ? setCollapsed(false) : setCollapsed(true)
            }}>SEARCH RECIPES</Button>
            {!collapsed && 
            <>
            <form onSubmit={onSubmit}>

                <label htmlFor='healthy'>Healthy
                    <Checkbox
                    type='checkbox'
                    name='healthy'
                    checked={searchValues.healthy}
                    onChange={onChange} />
                </label>

                <label htmlFor='appetizer'>Appetizer
                    <Checkbox
                    type='checkbox'
                    name='appetizer'
                    checked={searchValues.appetizer}
                    onChange={onChange} />
                </label>

                <label htmlFor='pastry'>Pastry
                    <Checkbox
                    type='checkbox'
                    name='pastry'
                    checked={searchValues.pastry}
                    onChange={onChange} />
                </label>

                <label htmlFor='salad'>Salad
                    <input
                    type='checkbox'
                    name='salad'
                    checked={searchValues.salad}
                    onChange={onChange} />
                </label>

                <label htmlFor='soup'>Soup
                    <input
                    type='checkbox'
                    name='soup'
                    checked={searchValues.soup}
                    onChange={onChange} />
                </label>

                <label htmlFor='snack'>Snack
                <input
                    type='checkbox'
                    name='snack'
                    checked={searchValues.bread}
                    onChange={onChange} />
                </label>

                <label htmlFor='side'>Side Dish
                    <input
                    type='checkbox'
                    name='side'
                    checked={searchValues.side}
                    onChange={onChange} />
                </label>

                <label htmlFor='sandwich'>Sandwich
                    <input
                    type='checkbox'
                    name='sandwich'
                    checked={searchValues.sandwich}
                    onChange={onChange} />
                </label>

                <label htmlFor='vegan'>Vegan
                    <input
                    type='checkbox'
                    name='vegan'
                    checked={searchValues.vegan}
                    onChange={onChange} />
                </label>

                <label htmlFor='lowCarb'>Low Carb
                    <input
                    type='checkbox'
                    name='lowCarb'
                    checked={searchValues.lowCarb}
                    onChange={onChange} />
                </label>

                <label htmlFor='crockpot'>Crock Pot
                    <input
                    type='checkbox'
                    name='crockpot'
                    checked={searchValues.crockpot}
                    onChange={onChange} />
                </label>

                <label htmlFor='mainCourse'>Main Course
                    <input
                    type='checkbox'
                    name='mainCourse'
                    checked={searchValues.mainCourse}
                    onChange={onChange} />
                </label>

                <label htmlFor='quick'>Quick and Easy
                    <input
                    type='checkbox'
                    name='quick'
                    checked={searchValues.quick}
                    onChange={onChange} />
                </label>

                <label htmlFor='main-search'>Custom Search
                    <input 
                    type='text'
                    name='custom'
                    value={searchValues.custom}
                    onChange={onChange} />
                </label>
                <Button>SEARCH</Button>
            </form>
            {/* SearchRecipes component goes here*/}
            </>
            }
            {filteredRecipes.map(rec=>{
                return (
                    <div style={{border: 'solid 1px black', margin: '1%'}}>
                    <p>{rec.recipe.title}</p>
                    </div>
                )
            })}      
        </div>
    );
};

export default SearchRecipes;