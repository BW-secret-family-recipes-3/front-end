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
    
    const toggleDisabled = e => {
        !collapsed ? setDisabled(true) : setDisabled(false);
    }
    return(
        <StyledRecipe onClick={toggleDisabled}>
            <h4>Recipe</h4>
            {/* Recipe component goes here*/}
            <p>Title: {recipe.title}</p>
            { !collapsed && <>
            <p>Source: {recipe.source}</p>
            <p>Ingredients: 
                <ul>
                    {recipe.ingredients.map(ing=>{
                        return (
                            <li>{ing}</li>
                        )
                    })}
                </ul></p>
            <p>Instructions: {recipe.instructions}</p>
            <p>Categories: {recipe.categories}</p></>
            }
        </StyledRecipe>
    );
};

export default Recipe;