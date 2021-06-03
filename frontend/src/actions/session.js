// holds all of the action creators for the session

// import types here
import { LOGIN_USER, CHECK_USER, LOGOUT_USER, SIGNUP_USER, LOGIN_DEMO } from '../types/session.js';

// action creators here
const checkForUser = (the_user) => {
    return {
        type: CHECK_USER,
        user: the_user
    };
};






const loginUser = (the_user) => {
    return {
        type: LOGIN_USER,
        user: the_user
    };
};



const logoutUser = (the_user) => {
    return {
        type: LOGOUT_USER,
        user: the_user
    };
};




const signupUser = (the_user) => {
    return {
        type: SIGNUP_USER,
        user: the_user
    };
}




const loginDemoUser = (the_user) => {
    return {
        type: LOGIN_DEMO,
        user: the_user
    };
}




// exports here
export {
    checkForUser,
    loginUser,
    logoutUser,
    signupUser,
    loginDemoUser,


};
