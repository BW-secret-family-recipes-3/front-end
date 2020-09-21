import React, { useState } from 'react';
import { connect } from "react-redux";
import * as yup from 'yup'
import schema from '../validation/Register_formSchema'

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
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)

    const onChange = (event) => {
        const {name, value} = event.target
        validateInput(name, value)
        setFormValues({...formValues, [name]: value})
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

                <button>Submit</button>

                {/* { disabled ? <p style={{color: 'red'}} id='submit-error'>Some fields are missing or incomplete</p> : null} */}

            </form>
           
        </div>
    );
};

export default Register;