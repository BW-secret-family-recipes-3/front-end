import React, {useState} from 'react';
import styled from 'styled-components';

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
    const [collapsed, setDisabled] = useState(true);
    const [isEditing, setIsEditing] = useState(false)
    const {recipe, deleteRecipe} = props;
    
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
                            <span key = {idx}>{cat}</span>
                        )
                    })}
            <div className = "buttons-container">
                <button onClick = {handleDelete}>Delete Recipe</button>
                <button>Edit Recipe</button>
            </div>
            </>
            }
        </StyledRecipeEditing>
        )
    }

    return isEditing ? editingRecipe() : staticRecipe()
};

export default Recipe;