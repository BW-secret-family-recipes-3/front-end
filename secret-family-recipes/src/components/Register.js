//Import dependencies
import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import * as yup from 'yup'
import schema from '../validation/Register_formSchema'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

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

const initialFieldChecks = {
    name: false,
    email: false,
    username: false,
    password: false,
    registered: false,
}

//Styled Form
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:10% 0;

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
        border: 2px solid ${pr => pr.buttonColor ? 'red' : 'green'};
        background-color: white;
        color: ${pr => pr.buttonColor ? 'red' : 'green'};
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

function Register(props){
    //Props
    const { registerUserAction } = props;
    const {inProgress, response, userToRegister, errors} = props.state;

    const history = useHistory()
    
    //State
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [usernameError, setUsernameError] = useState(null)
    const [missingFields, setMissingFields] = useState(false)
    const [buttonColor, setButtonColor] = useState(false)
    const [fieldChecks, setFieldChecks] = useState(initialFieldChecks)

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
                    setFieldChecks({...initialFieldChecks, registered: true})
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

    //Input Handler
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
            setFieldChecks({...fieldChecks, [name]: true})
          })
          .catch(error => {
            setFormErrors({...formErrors, [name]: error.errors[0]})
            setFieldChecks({...fieldChecks, [name]: false})
          })
      }

    //Use effects
    useEffect(() => {
        if (errors.response) {
            setUsernameError(errors.response.data.message)
        }
    }, [errors.response])

    useEffect(() => {
        schema.isValid(formValues)
            .then(valid => {
                setButtonColor(!valid)
            })
            .catch(() => {
                debugger
            })
    }, [formValues])

    //Register Component
    return(
        <div>
            <StyledForm buttonColor={buttonColor}>
                <h2>Register</h2>

                <label>NAME</label>
                <input
                    type='text'
                    name='name'
                    value={formValues.name}
                    onChange={onChange}
                    id='name-input'
                />
                
                {formErrors.name ? <p style={{color: 'red'}} id='name-error'>{formErrors.name}</p> : null}

                {fieldChecks.name ? <span style={{color: 'green'}}>✔︎</span> : null}

                <label>EMAIL</label>
                <input
                    type='email'
                    name='email'
                    value={formValues.email}
                    onChange={onChange}
                    id='email-input'
                />
                
                {formErrors.email ? <p style={{color: 'red'}} id='email-error'>{formErrors.email}</p> : null}

                {fieldChecks.email ? <span style={{color: 'green'}}>✔︎</span> : null}

                <label>USERNAME<span style={{color: 'red'}}>*</span></label>
                <input
                    type='text'
                    name='username'
                    value={formValues.username}
                    onChange={onChange}
                    id='username-input'
                />
                
                {formErrors.username ? <p style={{color: 'red'}} id='name-error'>{formErrors.username}</p> : null}

                {fieldChecks.username ? <span style={{color: 'green'}}>✔︎</span> : null}

                <label>PASSWORD<span style={{color: 'red'}}>*</span></label>
                <input
                    type='password'
                    name='password'
                    value={formValues.password}
                    onChange={onChange}
                    id='password-input'
                />

                {formErrors.password ? <p style={{color: 'red'}} id='password-error'>{formErrors.password}</p> : null}

                {fieldChecks.password ? <span style={{color: 'green'}}>✔︎</span> : null}

                {/* Submit Button */}
                <button onClick={onSubmit}>SUBMIT</button>

                {usernameError ? <p style={{color: 'red'}} id='submit-error'>{usernameError}</p> : null}

                { missingFields ?
                <p style={{color: 'red'}} id='submit-error'>Some fields are missing or incomplete</p> 
                : null}

                { fieldChecks.registered && !usernameError ?
                <p>You're all set! Click <span style={{color: 'dodgerblue', textDecoration: 'underline'}} onClick={() => {history.push('/user/login')}}>here</span> to login.</p> 
                : null}

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