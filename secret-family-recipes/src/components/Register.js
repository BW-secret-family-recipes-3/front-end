//Import dependencies
import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import * as yup from 'yup'
import schema from '../validation/Register_formSchema'
import styled from 'styled-components'

//Import actions
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
    //Props
    const { registerUserAction } = props;
    const {inProgress, response, userToRegister, errors} = props.state;
    
    //State
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [missingFields, setMissingFields] = useState(false)
    const [usernameError, setUsernameError] = useState(null)

    //Helper Functions
    const createRegisterUserAction = (userObject) => {
        return registerUserAction(userObject);
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
                    setMissingFields(false)
                }
                else {
                    setMissingFields(true)
                }
            })
            .catch(() => {
                debugger
            })
            .finally(() => {
                setUsernameError(null)
            })
    }

    //
    const onChange = (event) => {
        const {name, value} = event.target
        validateInput(name, value)
        setFormValues({...formValues, [name]: value})
    }

    //Input validator
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

      //Use effects
      useEffect(() => {
        if (errors.response) {
            setUsernameError(errors.response.data.message)
        } else {
            return
        }
    }, [errors.response])

    //Register Component
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

                <button onClick = {onSubmit}>Submit</button>

                {usernameError ? <p style={{color: 'red'}} id='submit-error'>{usernameError}</p> : null}
                
                { missingFields ? <p style={{color: 'red'}} id='submit-error'>Some fields are missing or incomplete</p> : null}

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