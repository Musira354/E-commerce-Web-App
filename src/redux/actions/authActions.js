
//An action always return a plain java script object that has key as type and payloqad
//this type
export const reduxLogin = (username) => (dispatch) => {
    return dispatch({
        type: "LOGIN",  //this type will be the type of the action you want to perform
        payload: username,  //this the data that we are going to be recieving
    });
};

export const reduxSignup = (username) => (dispatch) => {
    return dispatch({
        type: "SIGNUP",
        payload: username
    });
}

export const reduxForgotpassword = (username) => (dispatch) => {
    return dispatch({
        type: "FORGOTPASSWORD",
        payload: username
    });
}

