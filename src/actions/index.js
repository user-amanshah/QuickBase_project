import {
  SIGN_IN,
  SIGN_OUT,
  POST_VALUES,
  FETCH_VALUES,
  DELETE_VALUE,
  CLEAR_VALUES,
} from "./types";
export const signIn = () => {
  return {
    type: SIGN_IN,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
export const postFormValues = (formValues) => (dispatch) => {
  dispatch({
    type: POST_VALUES,
    payload: formValues,
  });
};
export const fetchFormValues = () => (dispatch) => {
  dispatch({
    type: FETCH_VALUES,
  });
};
export const clearFormValues = () => (dispatch) => {
  dispatch({
    type: CLEAR_VALUES,
  });
};
export const deleteFormValues = (i) => (dispatch) => {
  console.log(i);
  dispatch({
    type: DELETE_VALUE,
    payload: i,
  });
};
