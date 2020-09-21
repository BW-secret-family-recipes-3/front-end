// third-party imports
import axios from 'axios';

// api calls go here

// makeloginReq: 

export async function makeLoginReq(args) {
    const {username, password} = args;
    const URL = 'https://secret-family-backend.herokuapp.com/api/auth/login';

    return await axios.post(URL, {
        username: username,
        password: password
    });
}; 

// makeRegReq:

export async function makeRegReq(args) {
    console.log('in make reg req');
    const {username, password, email, name} = args;
    const URL = 'https://secret-family-backend.herokuapp.com/api/auth/register'
    
    return await axios.post(URL, {
        username: username,
        password: password,
        email: email,
        name: name
    });
}

