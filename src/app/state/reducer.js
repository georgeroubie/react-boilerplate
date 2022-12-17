import * as actionTypes from './actions';

function appReducer(state, { type, value }) {
  switch (type) {
    case actionTypes.UPDATE_THEME_SELECTION:
      return {
        ...state,
        theme: value,
      };
    default:
      return state;
  }
}

export { appReducer };
