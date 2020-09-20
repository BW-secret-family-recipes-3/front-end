import React from 'react';

function Recipe(props){
    const {recipe} = props;
    return(
        <div>
            <h4>Recipe</h4>
            {/* Recipe component goes here*/}
            <p>Title: {recipe.title}</p>
            <p>Source: {recipe.source}</p>
            <p>Ingredients: {recipe.ingredients}</p>
            <p>Instructions: {recipe.instructions}</p>
            <p>Categories: {recipe.categories}</p>
        </div>
    );
};

export default Recipe;