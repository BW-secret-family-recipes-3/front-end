import * as yup from 'yup';

export default yup.object().shape({
    username: yup.string().required('You must enter a valid username'),
    password: yup.string().required('You must enter a password')
});