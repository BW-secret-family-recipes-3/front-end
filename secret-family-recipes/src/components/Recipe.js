import React, {useState} from 'react';
import styled from 'styled-components';
import { editRecipeAction } from '../actions/editRecipe';

const StyledRecipeStatic = styled.div`
/* border: solid black 2px; */
margin: 6% auto;
background-color: #ffecd8;
text-align: center;
width: 50%;
border-bottom: solid 2px slategray;
padding: 2.5% 0;
border-radius: 5px;

    h4 {
        font-size: 7rem;
        margin: 1% auto;
        display: inline-block;
        border-radius: 30px;
        border: solid 4px darkorange;
        padding: 2%;
        box-shadow: 2px -2px 10px 2px inset darkorange, -2px 2px 10px 2px inset darkorange;
        background-color: white;
    }

    h5 {
        font-size: 4rem;
        font-family: 'amatic sc';
        margin: 5% auto;
        text-shadow: 2px 2px 2px slategray;
    }

    p {
        font-size: 2rem;
    }

    li {
        margin: 4%;
        font-size: 2rem;
    }

    ol {
        display: inline-block;
        text-align: left;
        width: 70%;
        border: solid 2px darkorange;
        border-radius: 5px;
        padding: 4%;
        box-shadow: 2px -2px 10px slategray, -2px 2px 10px slategray;
        background-color: white;
    }

    ol li {
        font-size: 1.6rem;
    }

    button {
        margin: 4% 2% 2% 2%;
    }

`

const StyledRecipeEditing = styled.div`
border: solid black 2px;
margin: 2% auto;
text-align: center;
`

function Recipe(props){

    // destructure  props
    const {recipe, deleteRecipe, editRecipe} = props;

    // grab userId form localStorage

    const userId = localStorage.getItem('userId');

    // state hooks
    const [collapsed, setDisabled] = useState(true);
    const [isEditing, setIsEditing] = useState(false)
    
    // editing Form State
    const [staticState, setStaticState] = useState({
        title: recipe.recipe.title,
        source: recipe.recipe.source
    })

    const blankIngredient = {measurement: '', name: ''};
    const [ingredientsState, setIngredientsState] = useState(recipe.ingredients);

    const blankInstruction = {
        step_number: -1,
        step_description: '',
        step_id: recipe.recipe.id
    }

    const [instructionsState, setInstructions] = useState(recipe.instructions)

    const [categoriesState, setCategories] = useState(recipe.recipe.category.split(','))

    const ingredientChange = (e) => {
    const updatedIngredients = [...ingredientsState];
       updatedIngredients[e.target.dataset.idx][e.target.name] = e.target.value;
       setIngredientsState(updatedIngredients);
    }

    const addIngredient = (e) => {
        e.preventDefault()
        setIngredientsState([...ingredientsState, blankIngredient])
    }

    const instructionsChange = (e) => {
        const updatedInstructions = [...instructionsState];
       updatedInstructions[e.target.dataset.idx][e.target.name] = e.target.value;
       setInstructions(updatedInstructions);
    }

    const addInstruction = (e) => {
        e.preventDefault()
        setInstructions([...instructionsState, blankInstruction])
    }

    const categoryChange = (e) => {
        const updatedCategory = [...categoriesState];
       updatedCategory[e.target.dataset.idx] = e.target.value;
       setCategories(updatedCategory)
    }

    const addCategory = (e) => {
        e.preventDefault()
        setCategories([...categoriesState, ''])
    }

    const toggleDisabled = e => {
        e.stopPropagation()
        !collapsed ? setDisabled(true) : setDisabled(false);
    }

    const handleDelete = (e) => {
        e.preventDefault();
        deleteRecipe(recipe.recipe.id);
    }

    const editHandler = (event) => {
        event.stopPropagation()
        setIsEditing(true)
    }

    const changeHandler = (event) => {
        const {name, value} = event.target
        setStaticState({...staticState, [name]:value})
    }

    const cancelHandler = (event) => {
        event.preventDefault()
        setIsEditing(false)
        setStaticState({
            title: '',
            source: ''
        })
    }

    // format recipe

    const recipeFormat = () => {
        const tempRecipeObj = {
            title: staticState.title,
            user_id: userId,
            instructions: instructionsState.map((ins, idx) => {
                return {
                    user_id: userId,
                    step_number: idx,
                    step_description: ins.step_description
                }
            }),
            ingredients: ingredientsState.map((ing) => {
                return {
                    name: ing.name,
                    measurement: ing.measurement
                }
            }),
            category: categoriesState.join(),
            source: staticState.source
        };
        return tempRecipeObj;
    }

    // save handler

    const saveHandler = (e) => {
        e.preventDefault();
        return editRecipe(recipeFormat(), recipe.recipe.id);
    }

    const staticRecipe = () => {
        return (
            <StyledRecipeStatic key={recipe.recipe.id} onClick={toggleDisabled}>
            <h4>{recipe.recipe.title}</h4>
            { !collapsed && <>
            <h5>Source:</h5>
            <p> {recipe.recipe.source}</p>
            <h5>Ingredients:</h5>
                <ul>
                    {recipe.ingredients.map((ing, idx) =>{
                        return (
                            <li key = {idx}>
                                {`${ing.measurement} of ${ing.name}`}
                            </li>
                        )
                    })}
                </ul>
            <h5>Instructions:</h5>
                    <ol>
                    {recipe.instructions.map((ins) => {
                        return( <li key = {ins.step_number}>
                            {ins.step_number + 1}- {ins.step_description}
                                </li>
                        )
                    })}
                    </ol>
            <h5>Categories:</h5>
                    <ul>
                    {recipe.recipe.category.split(',').map((cat, idx)=> {
                        return(
                            <li>
                                {cat}
                            </li>
                        )
                    })}
                    </ul>
            <div className = "buttons-container">
                <button onClick = {handleDelete}>Delete Recipe</button>
                <button onClick={editHandler}>Edit Recipe</button>
            </div>
            </>
            }
        </StyledRecipeStatic>
        )
    }

    const editingRecipe = () => {
        return (
            <StyledRecipeEditing onClick={toggleDisabled}>
            <h4>Recipe</h4>
            <p>Title: {recipe.recipe.title}</p>
            { !collapsed && <>
            <p>Source: {recipe.recipe.source}</p>
            <h5>Ingredients: 
                <ul>
                    {recipe.ingredients.map((ing, idx) =>{
                        return (
                            <li key = {idx}>
                                <span>Name: {ing.name}</span>
                                <span>Measurement: {ing.measurement}</span>
                            </li>
                        )
                    })}
                </ul></h5>
            <h5>Instructions:</h5>
                    {recipe.instructions.map((ins) => {
                        return( <li key = {ins.step_number}>
                            <span>Step: {ins.step_number + 1}</span>
                            <span>Description: {ins.step_description}</span>
                        </li>
                        )
                    })}
            <h5>Categories:</h5>
                    {recipe.recipe.category.split(',').map((cat, idx)=> {
                        return(
                            <label key = {idx} className='small'>
                                <input
                                key = {idx}
                                type='text'
                                name='category'
                                data-idx={idx}
                                placeholder={cat}
                                value={categoriesState[idx]}
                                onChange={categoryChange}
                                />
                            </label> 
                        )
                    })}
            <div className = "buttons-container">
                <button onClick = {handleDelete}>Delete Recipe</button>
                <button onClick = {saveHandler}>Save</button>
                <button onClick={cancelHandler}>Cancel</button>
            </div>
            </>
            }
        </StyledRecipeEditing>
        )
    }

    return isEditing ? editingRecipe() : staticRecipe()
};

export default Recipe;