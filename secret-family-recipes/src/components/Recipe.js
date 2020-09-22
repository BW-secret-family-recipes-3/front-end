import React from 'react';

function Recipe(props){
    const {recipe} = props;
    console.log(recipe);
    return(
        <div>
            <h4>Recipe</h4>
            {/* Recipe component goes here*/}
        </div>
    );
};

export default Recipe;