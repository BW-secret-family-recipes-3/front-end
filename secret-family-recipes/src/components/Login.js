import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import axios from 'axios';
import * as yup from 'yup';
import schema from '../validation/Login_formSchema';

import {fetchTokenAction} from '../actions/fetchToken'

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
    console.log(props.state);

    const {errors, inProgress, loggedIn, response, token} = props.state; // props from global state

    const createFetchTokenAction = (loginObject) => {  // use this to submit your login form
        return fetchTokenAction(loginObject);          // loginObject must have shape: {username: <username>, password: <password>}
    }

    /// state
    // formvalues state
    // formErrors 
    // issformvalid state
    const [formValues, setFormValues] = useState(initialFormValues);
    const [errorValues, setErrorValues] = useState(initialErrorValues);
    const [disabled, setDisabled] = useState(initialDisabled);




    // needs username, password REQUIRED


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

    useEffect(()=>{
        schema.isValid(formValues)
        .then(valid=>{
            setDisabled(!valid)
        })
    }, [formValues]);

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

    const onSubmit = e => {
        e.preventDefault();
        console.log(formValues);
    }



    console.log(props)
    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor='username'>
                    <input
                    type='text'
                    name='username'
                    value={formValues.username}
                    onChange={onChange} />
                </label>
                <p>{errorValues.username}</p>

                <label htmlFor='password'>
                    <input
                    type='password'
                    name='password'
                    value={formValues.password}
                    onChange={onChange} />
                </label>
                <p>{errorValues.password}</p>

                <button disabled={disabled}>LOG IN</button>
            </form>
            
        </div>
    );
};


function mapStateToProps(state) {
    return {
        state: state.fetchToken
    };
};

export default connect(mapStateToProps, {fetchTokenAction})(Login);