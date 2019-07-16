import UserActionTypes from "./user.action.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        error: null,
        currentUser: action.payload
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        error: null,
        currentUser: null
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    // case UserActionTypes.SIGN_UP_SUCCESS:
    //     return {
    //         ...state,
    //         error: null,
    //         currentUser: action.payload
    //     }
    default:
    case UserActionTypes.SIGN_UP_SUCCESS:
      return state;
  }
};

export default userReducer;
