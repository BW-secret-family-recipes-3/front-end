import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import axios from 'axios';
import * as yup from 'yup';
import schema from '../validation/Login_formSchema';
import styled from 'styled-components';

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

/* Setting initial values */
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
    /* Setting state */
    const [formValues, setFormValues] = useState(initialFormValues);
    const [errorValues, setErrorValues] = useState(initialErrorValues);
    const [disabled, setDisabled] = useState(initialDisabled);
    const [users, setUsers] = useState([])


    /* Changing/validating form and error values on every key change*/
    const onChange = e => {
        const {name, value} = e.target;
        change(name, value);
    };

    const change = (name, value) => {
        validate(name, value);
        setFormValues({
            ...formValues, [name]: value
        })
    };

    const validate = (name, value) => {
        yup.reach(schema, name).validate(value)
        .then(valid=>{
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
    const onSubmit = e => {
        e.preventDefault();
        console.log(formValues);
    }



    console.log(props)
    return(
        <Container>
            <h2>Login</h2>
            <Form onSubmit={onSubmit}>
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

                <button disabled={disabled}>LOG IN</button>
            </Form>
            
        </Container>
    );
};


export default Login;