/* eslint-disable import/no-anonymous-default-export */

/*Reducers are functions that take the current state and an action as argumenrts
and return a new state as result. (state, action) => newState.*/

const initialState = {
    //the intial state is kept here
    isAuthenticated: false,
    username: "",
};

export default function(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        // Do something here based on the different types of actions
        case "LOGIN":
            // Do something here based on the different types of actions
            console.log("in login reducer");
            return {
                // that has all the existing state data
                ...state,
                //but has a new object
                isAuthenticated: true,
                username: action.payload.username,
            };
        case "SIGNUP":
            console.log("in signup reducer");
            return {
                ...state,
                isAuthenticated: true,
                username: action.payload.username
            };
        case "FORGOTPASSWORD":
            console.log("in FORGOT PASSWORD reducer");
            return {
                ...state,
                isAuthenticated: true,
                username: action.payload.username
            };

        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state;
    }
}