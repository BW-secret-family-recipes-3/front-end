import React, { useState } from 'react';
import { connect } from "react-redux";

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

    return(
        <div>
            <h2>Register</h2>
           {/* Register form goes here*/}
        </div>
    );
};

export default Register;