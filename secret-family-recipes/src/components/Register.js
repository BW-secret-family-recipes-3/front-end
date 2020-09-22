import React, { useState } from 'react';
import { connect } from "react-redux";

import {registerUserAction} from '../actions/registerUser';

const initialFormValues = {
    name: '',
    email: '',
    username: '',
    password: '',
}

const initialFormErrors = {
    name: '',
    email: '',
    username: '',
    password: '',
}

function Register(props){
    // username, password REQUIRED
    // name, email OPTIONAL
    const { registerUserAction } = props;
    const {inProgress, response, userToRegister, errors} = props.state; // global state passed in as props
    const createRegisterUserAction = (userObject) => {    // use this to submit your form values, you will find a response to your submission in the global state values
        return registerUserAction(userObject);            // userObject must have shape -> {username: <username>, password: <password>, email: <email>, name: <name> }
    }                                                     // if no email or name just submit an empty string


    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)

    const onChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target
        setFormValues({...formValues, [name]: value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        return createRegisterUserAction(formValues);
    }

    return(
        <div>
            <h2>Register</h2>


            <form>

                <label>
                    Your Name
                    <input 
                        type='text'
                        name='name'
                        value={formValues.name}
                        placeholder='Name'
                        onChange={onChange}
                        id='name-input'
                    />
                </label>

                {/* {formErrors.name ? <p style={{color: 'red'}} id='name-error'>{formErrors.name}</p> : null} */}

                <label>
                    Email
                    <input 
                        type='email'
                        name='email'
                        value={formValues.email}
                        placeholder='email'
                        onChange={onChange}
                        id='email-input'
                    />
                </label>

                {/* {formErrors.email ? <p style={{color: 'red'}} id='email-error'>{formErrors.email}</p> : null} */}

                <label>
                    Choose a username
                    <input 
                        type='text'
                        name='username'
                        value={formValues.username}
                        placeholder='username'
                        onChange={onChange}
                        id='username-input'
                    />
                </label>

                <label>
                    Password
                    <input 
                        type='password'
                        name='password'
                        value={formValues.password}
                        placeholder='password'
                        onChange={onChange}
                        id='password-input'
                    />
                </label>

                {/* {formErrors.password ? <p style={{color: 'red'}} id='password-error'>{formErrors.password}</p> : null} */}

                <button onClick = {onSubmit}>Submit</button>

                {/* { disabled ? <p style={{color: 'red'}} id='submit-error'>Some fields are missing or incomplete</p> : null} */}

            </form>
           
        </div>
    );
};

function mapStateToProps(state) {
    return {
        state: state.registerUser
    };
};

export default connect(mapStateToProps, {registerUserAction})(Register);