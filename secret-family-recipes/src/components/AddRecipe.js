import React, {useState} from 'react';
import { connect } from "react-redux";

function AddRecipe(props){

    const initialIngredientsState = [{name: '', measurement: ''}];
    const [ingredientsState, setIngredientsState] = useState(initialIngredientsState);

    const addIngredient = (e) => {
        e.preventDefault();
        return setIngredientsState(...ingredientsState, {name: '', measurement: ''});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div>
            <h2>Add Recipe</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor = "title">Title</label>
                    <input type ="text" name="title" id="title"/>
                    <label htmlFor = "source">Source</label>
                    <input type ="text" name="source" id="source"/>
                </div>
                <div>
                    <h4>Ingredients</h4>
                    <button onClick={addIngredient}>Add another ingredient</button>
                    {
                        ingredientsState.map((val, idx) => {
                            let ingredientId = `name-${idx}`, measurementId = `measurement-${idx}`;
                            return (
                                <div key = {idx}>
                                    <label htmlFor={ingredientId}>{`Ingredient #${idx + 1}`}</label>
                                    <input
                                        type="text"
                                        name={ingredientId}
                                        data-id={idx}
                                        id={ingredientId}
                                        className = "name"
                                    />
                                    <label htmlFor={measurementId}>Measurement</label>
                                    <input
                                        type="text"
                                        name={measurementId}
                                        data-id={idx}
                                        id={measurementId}
                                        className="measurement"
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <h4>Instructions</h4>
                    <button>Add another instruction</button>
                </div>
                <input type ="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddRecipe;