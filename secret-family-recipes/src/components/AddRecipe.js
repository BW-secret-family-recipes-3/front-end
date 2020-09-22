import React, {useState} from 'react';

import {DynamicInputs, DynamicInput} from './DynamicInputs';

function AddRecipe(props){

    // dynamic state and handlers

    const blankIngredient = {name: '', measurement: ''};
    const [ingredientsState, setIngredientsState] = useState([
        {...blankIngredient}
    ]);

    const blankInstruction = {step: -1, description: ''};
    const [instructionsState, setInstructionsState] = useState([
        {...blankInstruction}
    ]);

    const addIngredient = () => {
        setIngredientsState([...ingredientsState, {...blankIngredient}]);
    };

    const addInstruction = () => {
        setInstructionsState([...instructionsState, {...blankInstruction}]);
    }

    const handleIngredientsChange = (e) => {
       const updatedIngredients = [...ingredientsState];
       updatedIngredients[e.target.dataset.idx][e.target.className] = e.target.value;
       setIngredientsState(updatedIngredients);
    }

    const handleInstructionsChange = (e) => {
        const updatedInstructions = [...instructionsState];
        updatedInstructions[e.target.dataset.idx][e.target.className] = e.target.value;
        setInstructionsState(updatedInstructions);
    }


    // static state and handlers

    const [staticState, setStaticState] = useState({
        title: '',
        source: ''
    });

    const handleStaticChange = (e) => setStaticState({
        ...staticState,
        [e.target.name]: [e.target.value]
    });

    // jsx

    return(
        <div>
            <h3>Add Recipe</h3>
            <form>
                <div className = "static-inputs">
                    <label htmlFor="title">Title</label>   
                    <input type="text" name="title" id="title" value = {staticState.title} onChange = {handleStaticChange}/> 
                    <label htmlFor="source">Source</label> 
                    <input type="text" name="source" id="source" value = {staticState.source} onChange = {handleStaticChange}/>
                </div> 
                <div className = "dynamic-inputs">
                    <input type="button" value="Add New Ingredient" onClick={addIngredient} /> 
                    {ingredientsState.map((val, idx) => {
                        return <DynamicInputs
                                key = {idx}
                                idx = {idx}
                                dynamicState = {ingredientsState}
                                handleDynamicChange = {handleIngredientsChange}
                                field1 = "ingredient"
                                field2 = "measurement"
                                />
                    })}
                    <input type="button" value="Add New Instruction" onClick={addInstruction} />  
                    {instructionsState.map((val, idx) => {
                        return <DynamicInputs
                                key = {idx}
                                idx = {idx}
                                dynamicState = {instructionsState}
                                handleDynamicChange = {handleInstructionsChange}
                                field1 = "step"
                                field2 = "description"
                                />
                    })}
                </div>         
                <input type="submit" value="Submit" />  
            </form>
        </div>
    )
}

export default AddRecipe;