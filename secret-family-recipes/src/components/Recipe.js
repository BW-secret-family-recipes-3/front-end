import React, {useState} from 'react';
import styled from 'styled-components';


const StyledRecipeStatic = styled.div`

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
    .name, .measurement, .step {
        font-size: 3rem;
        font-family: 'amatic sc';
        margin: 5% auto;
        text-shadow: 2px 2px 2px slategray;
    }
    .measurement {
        margin-left: 2%;
    }
    .category {
        margin: 0 2%;
        padding: 2%;
        background-color: white;
        border-radius: 30px;
        border: solid 4px darkorange;
        box-shadow: 2px -2px 10px 2px inset darkorange, -2px 2px 10px 2px inset darkorange;
    }
    p {
        font-size: 2rem;
    }
    span {
        font-family: 'Roboto', sans-serif;
        font-size: 2rem;
        text-shadow: none;
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
        margin: 7.5% 2.5% 0;
        border: 2px solid slategray;
        background-color: #ffecd8;
        color: slategray;
        border-radius: 8px;
        padding: 1.5% 1.5%;
        transition: all 0.3s ease-in-out;

        &:hover {
            color: Darkorange;
            border-color: Darkorange;
            transition: all 0.3s ease-in-out;
        }

        &:focus {
            outline: none;
        }
     }
`

const StyledRecipeEditing = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 6% auto;
    background-color: #ffecd8;
    text-align: center;
    width: 50%;
    border-bottom: solid 2px slategray;
    padding: 2.5% 0;
    border-radius: 5px;
    
    form {
        width: 100%;
    }

    div {
        margin: 2% 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    li {
        display: inline-block;
        width: 100%;
    }

    label {
        font-family: 'Amatic SC', cursive;
        font-weight: bold;
        font-size: 3rem;
        margin: 2.5% 0;
    }

    label.small {
        font-size: 2rem;
    }

    .small input {
        margin: 0 1%;
    }
    
    .buttons-container {
        display: inline;
    }

    button {
        margin: 2.5%;
        border: 2px solid slategray;
        background-color: #ffecd8;
        color: slategray;
        border-radius: 8px;
        padding: 2.5%;
        transition: all 0.3s ease-in-out;

        &:hover {
            color: Darkorange;
            border-color: Darkorange;
            transition: all 0.3s ease-in-out;
        }

        &:focus {
            outline: none;
        }
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
            title: recipe.recipe.title,
            source: recipe.recipe.source
        })
        setIngredientsState(recipe.ingredients)
        setInstructions(recipe.instructions)
        setCategories(recipe.recipe.category.split(','))
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
            <h4>{recipe.recipe.title}</h4>
            { !collapsed && <>
            <h5>Recipe Source:</h5><p>{recipe.recipe.source}</p>
            <h5>Ingredients: 
                <ul>
                    {recipe.ingredients.map((ing, idx) =>{
                        return (
                            <li key = {idx}>
                                <span>
                                    <span className='name'>
                                        Name:<span>{ing.name}</span>
                                    </span>
                                </span>

                                <span>
                                    <span className='measurement'>
                                        Measurement:<span>{ing.measurement}</span>
                                    </span>
                                </span>
                            </li>
                        )
                    })}
                </ul></h5>
            <h5>Instructions:</h5>
                    {recipe.instructions.map((ins) => {
                        return( <li key = {ins.step_number}>
                            <span className='step'>Step {ins.step_number + 1} </span>
                            <span>{ins.step_description}</span>
                        </li>
                        )
                    })}
            <h5>Categories:</h5>
                    {recipe.recipe.category.split(',').map((cat, idx)=> {
                        return(
                            <span key = {idx} className='category'>{cat}</span>
                        )
                    })}
            <div className = "buttons-container">
                <button onClick={editHandler}>Edit</button>
                <button onClick = {handleDelete}>Delete</button>
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
            <label>Title</label>
            <input 
                type='text'
                name='title'
                value={staticState.title}
                placeholder={recipe.recipe.title}
                onChange={changeHandler}
            />
            </div>
            
            <div>
            <label>Recipe Source</label>
            <input 
                type='text'
                name='source'
                value={staticState.source}
                placeholder={recipe.recipe.source}
                onChange={changeHandler}
            />
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
                            <label className='small'>Step {idx + 1}
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
            <button onClick={addInstruction}>Add Step</button>
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
                <button onClick = {handleDelete}>Delete</button>
                <button onClick = {saveHandler}>Save</button>
                <button onClick={cancelHandler}>Cancel</button>
            </div>
        </StyledRecipeEditing>
        )
    }

    return isEditing ? editingRecipe() : staticRecipe()
};

export default Recipe;