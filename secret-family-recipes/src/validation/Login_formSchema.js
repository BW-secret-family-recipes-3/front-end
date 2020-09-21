import * as yup from 'yup';

export default yup.object().shape({
    username: yup.string().required('You must enter a valid username'),
    password: yup.string().min(6, 'Password must be between 6-8 characters').max(8, 'Password must be between 6-8 characters').required('You must enter a password')
});