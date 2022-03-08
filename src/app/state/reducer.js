import * as actionTypes from './actions';

const appReducer = (state, { type, value }) => {
  switch (type) {
    case actionTypes.UPDATE_USER_NAME:
      return {
        ...state,
        userName: value,
      };
    default:
      return state;
  }
};

export default appReducer;
