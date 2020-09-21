//Import dependencies
import * as yup from 'yup'

//Schema object
export default yup.object().shape({
    name: yup
        .string()
        .min(3, 'Name must be at least 3 characters'),
    email: yup
        .string()
        .email('Must be a valid email address'),
    username: yup
        .string()
        .required('Username is required')
        .min(3, 'Name must be at least 3 characters'),
    password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters'),
})