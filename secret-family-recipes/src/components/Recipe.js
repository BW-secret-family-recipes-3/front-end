import React, {useState} from 'react';
import styled from 'styled-components';
import { editRecipeAction } from '../actions/editRecipe';

const StyledRecipeStatic = styled.div`
border: solid black 2px;
margin: 2% auto;
text-align: center;
`

const StyledRecipeEditing = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        margin: 2% 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    label {
        font-family: 'Amatic SC', cursive;
        font-weight: bold;
        font-size: 3rem;
    }

    label.small {
        font-size: 2rem;
    }
`

const unorderedList = styled.ul`
list-style-position: inside;
width: 40%;
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
        event.preventDefault()
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
            <StyledRecipeStatic onClick={toggleDisabled}>
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
                            <span key = {idx}>{cat}</span>
                        )
                    })}
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
            <h2>Edit Recipe</h2>

            <form>

            <div>
            <label>Title 
            <input 
                type='text'
                name='title'
                value={staticState.title}
                placeholder={recipe.recipe.title}
                onChange={changeHandler}
            />
            </label>
            </div>
            
            <div>
            <label>Source
            <input 
                type='text'
                name='source'
                value={staticState.source}
                placeholder={recipe.recipe.source}
                onChange={changeHandler}
            />
            </label>
            </div>
            
            <div>
            <label>Ingredients:</label>
            <ul>
                {ingredientsState.map((ing, idx) =>{
                        return (
                            <li key = {idx}>
                                <label className='small'>Name:
                                    <input
                                        type='text'
                                        name='name'
                                        placeholder={ing.name}
                                        data-idx={idx}
                                        value={ingredientsState[idx].name}
                                        onChange={ingredientChange}
                                    />
                                </label>
                                <label className='small'>Measurement:
                                    <input
                                        type='text'
                                        name='measurement'
                                        placeholder={ing.measurement}
                                        data-idx={idx}
                                        value={ingredientsState[idx].measurement}
                                        onChange={ingredientChange}
                                    />
                                </label>
                            </li>
                        )
                    })}
            </ul>
            <button onClick={addIngredient}>Add Ingredient</button>
            </div>
            
            <div>
            <label>Instructions:</label>
                {instructionsState.map((ins, idx) => {
                        return( 
                        <li key = {idx}>
                            <label className='small'>Step: {idx + 1}
                                <input
                                    type='text'
                                    name='step_description'
                                    data-idx={idx}
                                    value={instructionsState[idx].step_description}
                                    placeholder={ins.step_description}
                                    onChange={instructionsChange}
                                />
                            </label>
                        </li>
                        )
                    })
                }
            <button onClick={addInstruction}>Add a Step</button>
            </div>
            
            <div>
            <label>Categories:</label>
                {categoriesState.map((cat, idx)=> {
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
                    })
                }
                <button onClick={addCategory}>Add Category</button>
            </div>
            
            </form>

            <div className = "buttons-container">
                <button onClick = {handleDelete}>Delete Recipe</button>
                <button onClick = {saveHandler}>Save</button>
                <button onClick={cancelHandler}>Cancel</button>
            </div>
        </StyledRecipeEditing>
        )
    }

    return isEditing ? editingRecipe() : staticRecipe()
};

export default Recipe;