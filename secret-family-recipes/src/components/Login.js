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

const Form = styled.form`
    border: solid black 2px;
    width: 35%;
    margin: auto;
    padding: 2% 0;
`

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
        return createFetchTokenAction(formValues);
    }

    return(
        <Container>
            <h2>Login</h2>
            <Form >
                <label htmlFor='username'>Username<br></br>
                    <input
                    type='text'
                    name='username'
                    value={formValues.username}
                    onChange={onChange} />
                </label>
                <ErrorMessage>{errorValues.username}</ErrorMessage>

                <label htmlFor='password'>Password<br></br>
                    <input
                    type='password'
                    name='password'
                    value={formValues.password}
                    onChange={onChange} />
                </label>
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