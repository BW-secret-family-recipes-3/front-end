import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import * as yup from 'yup';
import schema from '../validation/Login_formSchema';
import styled from 'styled-components';
import {fetchTokenAction} from '../actions/fetchToken'

/* Styled components */
const ErrorMessage = styled.p`
    color: red;
`

const Container = styled.div`
    text-align: center;
`

// const Form = styled.form`
//     border: solid black 2px;
//     width: 35%;
//     margin: auto;
//     padding: 2% 0;
// `

//Added by Josh
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10% 0;

    label, input, button, p, h2 {
        margin: 1.5% 0;
    }

    input {
        border: 2px solid slategray;
        border-radius: 6px;
        transition: all 0.3s ease-in-out;

        &:focus {
            outline: none;
            border-color: darkorange;
        }

        &:hover {
            border-color: darkorange;
            transition: all 0.3s ease-in-out;
        }
    }

    button {
        border: 2px solid ${pr => pr.disabled ? 'red' : 'green'};
        background-color: white;
        color: ${pr => pr.disabled ? 'red' : 'green'};
        border-radius: 8px;
        padding: 1%;
        transition: all 0.3s ease-in-out;

        &:focus {
            outline: none;
        }

        &:hover {
            transition: all 0.3s ease-in-out;
            font-weight: bold;
            border-width: 3px;
        }
     }
`
//Added by Josh

const initialFormValues = {
    username: '',
    password: '',
};

const initialErrorValues = {
    username: '',
    password: '',
}


const initialDisabled = true;


function Login(props){

    const {errors, inProgress, loggedIn, response, token} = props.state; // props from global state

    // redirect if logged in
    useEffect(() => {
        if (loggedIn) {
            props.history.push('/user/dashboard/viewrecipes');
        };
    }, [loggedIn])
    

    const createFetchTokenAction = (loginObject) => {  // use this to submit your login form
        return props.fetchTokenAction(loginObject);          // loginObject must have shape: {username: <username>, password: <password>}
    }

    /// state
    // formvalues state
    // formErrors 

    const [formValues, setFormValues] = useState(initialFormValues);
    const [errorValues, setErrorValues] = useState(initialErrorValues);
    const [disabled, setDisabled] = useState(initialDisabled);


    /* Changing/validating form and error values on every key change*/
    const onChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        validate(name, value)
        setFormValues({...formValues, [name]: value})
    };

    const validate = (name, value) => {
        yup.reach(schema, name).validate(value)
        .then( () =>{
            setErrorValues({
                ...errorValues, [name]: ''
            })
        })
        .catch(error=>{
            setErrorValues({
                ...errorValues, [name]: error.errors[0]
            })
        })
    };

    useEffect(()=>{
        schema.isValid(formValues)
        .then(valid=>{
            setDisabled(!valid)
        })
    }, [formValues]);

    /*Submitting form */
    const onSubmit = (e) => {
        e.preventDefault();
        createFetchTokenAction(formValues);
    };

    return(
        <Container>
            <Form disabled={disabled}>
                <h2>Login</h2>
                <label htmlFor='username'>USERNAME<span style={{color: 'red'}}>*</span></label>
                    <input
                    type='text'
                    name='username'
                    value={formValues.username}
                    onChange={onChange} />
                <ErrorMessage>{errorValues.username}</ErrorMessage>

                <label htmlFor='password'>PASSWORD<span style={{color: 'red'}}>*</span></label>
                    <input
                    type='password'
                    name='password'
                    value={formValues.password}
                    onChange={onChange} />
                <ErrorMessage>{errorValues.password}</ErrorMessage>

                <button onClick = {onSubmit} disabled={disabled}>LOG IN</button>
            </Form>
            
        </Container>
    );
};


function mapStateToProps(state) {
    return {
        state: state.fetchToken
    };
};

export default connect(mapStateToProps, {fetchTokenAction})(Login);