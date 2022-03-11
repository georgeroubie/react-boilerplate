import * as actionTypes from './actions';

const appReducer = (state, { type, value }) => {
  switch (type) {
    case actionTypes.UPDATE_USER_NAME:
      return {
        ...state,
        userName: value,
      };
    case actionTypes.UPDATE_THEME_SELECTION:
      return {
        ...state,
        theme: value,
      };
    default:
      return state;
  }
};

export { appReducer };
