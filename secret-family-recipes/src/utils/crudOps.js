// third-party imports
import axios from 'axios';

// api calls go here

// makeloginReq: 

// accepts {username: <username>, password: <password>}


export async function makeLoginReq(args) {
    console.log('in make login req');
    const {username, password} = args;
    const URL = 'https://secret-family-backend.herokuapp.com/api/auth/login';

    await axios.post(URL, {
        username: username,
        password: password
    })
        .then (res => {
        console.log(res);
    })
        .catch (err => {
        console.log(err);
    });
    
} 

// makeRegReq(): returns boolean flag true if succesful, false if unsuccessful accepts 
