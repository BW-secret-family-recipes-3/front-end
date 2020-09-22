//Import dependencies
import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import * as yup from 'yup'
import schema from '../validation/Register_formSchema'
import styled from 'styled-components'

import {registerUserAction} from '../actions/registerUser';

//Initial state values
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

//Styled Form
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
`

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
    const [disabled, setDisabled] = useState(false)
    const [usernameError, setUsernameError] = useState(null)

    useEffect(() => {
        if (errors.response) {
            setUsernameError(errors.response.data.message)
        } else {
            return
        }
    }, [errors.response])

    const onChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target
        validateInput(name, value)
        setFormValues({...formValues, [name]: value})
    }

    const submitHelper = () => {
        return createRegisterUserAction(formValues);
    }

    const onSubmit = (e) => {
        e.preventDefault()
        schema.isValid(formValues)
            .then((valid) => {
                if (valid) {
                    submitHelper()
                    setFormValues(initialFormValues)
                    setDisabled(false)
                }
                else {
                    setDisabled(true)
                }
            })
            .catch(() => {
                debugger
            })
            .finally(() => {
                setUsernameError(null)
            })
    }

    const hoverHandler = (event) => {
        
    }

    const validateInput = (name, value) => {
        yup
          .reach(schema, name)
          .validate(value)
          .then(() => {
            setFormErrors({...formErrors, [name]: ''})
          })
          .catch(error => {
            setFormErrors({...formErrors, [name]: error.errors[0]})
          })
      }

    //   useEffect(() => {
    //     schema.isValid(formValues)
    //         .then(valid => {
    //             setDisabled(!valid)
    //         })
    //         .catch(() => {
    //             debugger
    //         })
    //   },[formValues])

      
    return(
        <div>
            <StyledForm>
                <h2>Register</h2>

                <label>Your Name</label>
                <input
                    type='text'
                    name='name'
                    value={formValues.name}
                    onChange={onChange}
                    id='name-input'
                />
                
                {formErrors.name ? <p style={{color: 'red'}} id='name-error'>{formErrors.name}</p> : null}

                <label>Email</label>
                <input
                    type='email'
                    name='email'
                    value={formValues.email}
                    onChange={onChange}
                    id='email-input'
                />
                
                {formErrors.email ? <p style={{color: 'red'}} id='email-error'>{formErrors.email}</p> : null}

                <label>Username<span style={{color: 'red'}}>*</span></label>
                <input
                    type='text'
                    name='username'
                    value={formValues.username}
                    onChange={onChange}
                    id='username-input'
                />
                
                {formErrors.username ? <p style={{color: 'red'}} id='name-error'>{formErrors.username}</p> : null}

                <label>Password<span style={{color: 'red'}}>*</span></label>
                <input
                    type='password'
                    name='password'
                    value={formValues.password}
                    onChange={onChange}
                    id='password-input'
                />

                {formErrors.password ? <p style={{color: 'red'}} id='password-error'>{formErrors.password}</p> : null}

                <button onClick = {onSubmit} onMouseEnter={hoverHandler}>Submit</button>

                {usernameError ? <p style={{color: 'red'}} id='submit-error'>{usernameError}</p> : null}
                
                { disabled ? <p style={{color: 'red'}} id='submit-error'>Some fields are missing or incomplete</p> : null}

            </StyledForm>
           
        </div>
    );
};

function mapStateToProps(state) {
    return {
        state: state.registerUser
    };
};

export default connect(mapStateToProps, {registerUserAction})(Register);