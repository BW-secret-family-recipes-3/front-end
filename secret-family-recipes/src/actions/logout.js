const LOGGING_OUT = "LOGGING_OUT";
const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
const LOGOUT_ERROR = "LOGOUT_ERROR";

export const logoutAction = () => dispatch => {
    dispatch({type: LOGGING_OUT});
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    if (localStorage.getItem('token') || localStorage.getItem('userId')){
        return dispatch({type: LOGOUT_ERROR});
    } else {
        return dispatch({type: LOGOUT_SUCCESS});
    };
};
   