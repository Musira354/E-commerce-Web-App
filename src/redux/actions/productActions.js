import { ActionTypes } from "../constants/action-types";

//An action always return a plain java script object that has key as type and payloqad
//redux store looks at the action types to see if any update is needed or not

// export const setProducts = (products) => (dispatch) => {
//   return dispatch({
//     type: ActionTypes.SET_PROdUCTS, //this type will be the type of the action you want to perform
//     payload: username, //this the data that we are going to be recieving
//   });
// };

export const getProcuctDetail = (id) => (dispatch) => {
  return dispatch({
    type: "GET_PRODUCT_DETAIL",
    payload: {
      id: id,
    },
  });
};
