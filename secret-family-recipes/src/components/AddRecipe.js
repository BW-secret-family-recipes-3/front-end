import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addRecipeAction} from '../actions/addRecipe'
import {DynamicInputs, DynamicInput} from './DynamicInputs';

function AddRecipe(props){

    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    // dynamic state and handlers

    const blankIngredient = {measurement: '', ingredient: ''};
    const [ingredientsState, setIngredientsState] = useState([
        {...blankIngredient}
    ]);

    const [instructionsState, setInstructionsState] = useState(['']);

    const [categoriesState, setCategoriesState] = useState(['']);

    const addIngredient = () => {
        setIngredientsState([...ingredientsState, {...blankIngredient}]);
    };

    const addInstruction = () => {
        setInstructionsState([...instructionsState, '']);
    };

    const addCategory = () => {
        setCategoriesState([...categoriesState, ''])
    };

    const handleIngredientsChange = (e) => {
       const updatedIngredients = [...ingredientsState];
       updatedIngredients[e.target.dataset.idx][e.target.className] = e.target.value;
       setIngredientsState(updatedIngredients);
    }

    const handleInstructionsChange = (e) => {
        const updatedInstructions = [...instructionsState];
        updatedInstructions[e.target.dataset.idx] = e.target.value;
        setInstructionsState(updatedInstructions);
    }

    const handleCategoryChange = (e) => {
        const updatedCategories = [...categoriesState];
        updatedCategories[e.target.dataset.idx] = e.target.value;
        setCategoriesState(updatedCategories);
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

 
    // recipe object formatter
    const recipeFormat = () => {
        const tempRecipeObj = {
            title: staticState.title,
            user_id: userId,
            instructions: instructionsState.map((ins, idx) => {
                return {
                    user_id: userId,
                    step_number: idx,
                    step_description: ins
                }
            }),
            ingredients: ingredientsState.map((ing) => {
                return {
                    name: ing.ingredient,
                    measurement: ing.measurement
                }
            }),
            category: categoriesState.join(),
            source: staticState.source
        };
        return tempRecipeObj;
    }

    // add recipe submit
    const submitHandler = (e) => {
        e.preventDefault();
        props.addRecipeAction({recipe: recipeFormat(), token: token});
    }
    // jsx

    return(
        <div>
            <h3>Add Recipe</h3>
            <form onSubmit = {submitHandler}>
                <div className = "static-inputs">
                    <label htmlFor="title">Title</label>   
                    <input type="text" name="title" id="title" value = {staticState.title} onChange = {handleStaticChange}/> 
                    <label htmlFor="source">Source</label> 
                    <input type="text" name="source" id="source" value = {staticState.source} onChange = {handleStaticChange}/>
                </div> 
                <div className = "dynamic-inputs">
                    <div className = "ingredients-inputs">
                        <h4>Ingredients</h4>
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
                    </div>
                    <div className = "instructions-inputs">
                        <h4>Instructions</h4>
                        <input type="button" value="Add New Instruction" onClick={addInstruction} />  
                        {instructionsState.map((val, idx) => {
                            return <DynamicInput
                                    key = {idx}
                                    idx = {idx}
                                    dynamicState = {instructionsState}
                                    handleDynamicChange = {handleInstructionsChange}
                                    field = "step"
                                    />
                        })}
                    </div>
                    <div className = "categories-inputs">
                        <h4>Categories</h4>
                        <input type="button" value="Add New Category" onClick={addCategory} /> 
                        {categoriesState.map((val, idx) => {
                            return <DynamicInput
                                    key = {idx}
                                    idx = {idx}
                                    dynamicState = {categoriesState}
                                    handleDynamicChange = {handleCategoryChange}
                                    field = "category"
                                    />
                        })}
                    </div>
                </div>         
                <input type="submit" value="Submit" />  
            </form>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        user: state.user,
        fetchToken: state.fetchToken,
        addRecipe: state.addRecipe
    };
};

export default connect(mapStateToProps, {addRecipeAction})(AddRecipe);