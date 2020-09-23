import React, {useState} from 'react';
import styled from 'styled-components';

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
    const [collapsed, setDisabled] = useState(true);
    const [isEditing, setIsEditing] = useState(false)
    const {recipe, deleteRecipe} = props;

    //Form State
    const [staticState, setStaticState] = useState({
        title: '',
        source: ''
    })

    const blankIngredient = {measurement: '', ingredient: ''};
    const [ingredientsState, setIngredientsState] = useState(recipe.ingredients);

    const ingredientChange = (event) => {
        const newIngredient = {
            [event.target.name]: event.target.value
        }
        setIngredientsState([...ingredientsState, newIngredient])
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
                {recipe.ingredients.map((ing, idx) =>{
                        return (
                            <li key = {idx}>
                                <label className='small'>Name:
                                    <input
                                        type='text'
                                        name='ingredient-name'
                                        placeholder={ing.name}
                                        onChange={ingredientChange}
                                    />
                                </label>
                                <label className='small'>Measurement:
                                    <input
                                        type='text'
                                        name='ingredient-measurement'
                                        placeholder={ing.measurement}
                                        onChange={ingredientChange}
                                    />
                                </label>
                            </li>
                        )
                    })}
            </ul>
            <button>Add Ingredient</button>
            </div>
            
            <div>
            <label>Instructions:</label>
                {recipe.instructions.map((ins) => {
                        return( 
                        <li key = {ins.step_number}>
                            <label className='small'>Step: {ins.step_number + 1}
                                <input
                                    type='text'
                                    name='instruction-description'
                                    placeholder={ins.step_description}
                                    onChange={() => {}}
                                />
                            </label>
                        </li>
                        )
                    })
                }
            <button>Add a Step</button>
            </div>
            
            <div>
            <label>Categories:</label>
                {recipe.recipe.category.split(',').map((cat, idx)=> {
                        return(
                            <label className='small'>
                                <input
                                key = {idx}
                                type='text'
                                name='category'
                                placeholder={cat}
                                onChange={() => {}}
                                />
                            </label> 
                        )
                    })
                }
            </div>
            </form>

            <div className = "buttons-container">
                <button onClick = {handleDelete}>Delete Recipe</button>
                <button>Save</button>
                <button onClick={cancelHandler}>Cancel</button>
            </div>
        </StyledRecipeEditing>
        )
    }

    return isEditing ? editingRecipe() : staticRecipe()
};

export default Recipe;