import React, {useState} from 'react';
import styled from 'styled-components';

const StyledRecipe = styled.div`
border: solid black 2px;
margin: 2% auto;
text-align: center;
`

const unorderedList = styled.ul`
list-style-position: inside;
width: 40%;
`

function Recipe(props){
    const [collapsed, setDisabled] = useState(true);
    const {recipe} = props;
    console.log(recipe);

    
    const toggleDisabled = e => {
        !collapsed ? setDisabled(true) : setDisabled(false);
    }
    return(
        <StyledRecipe onClick={toggleDisabled}>
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
            </>
            }
        </StyledRecipe>
    );
};

export default Recipe;