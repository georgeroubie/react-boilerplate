import { useReducer } from 'react';
import { getCurrentTheme, saveThemeSelection } from '../theme/themes/helpers';
import * as actionTypes from './actions';
import { appReducer } from './reducer';

function useAppState() {
  const [state, dispatch] = useReducer(appReducer, {
    userName: 'friend',
    theme: getCurrentTheme(),
  });

  function setState(type, value) {
    dispatch({ type, value });
  }

  function setUserName(value) {
    setState(actionTypes.UPDATE_USER_NAME, value);
  }

  function setTheme(value) {
    saveThemeSelection(value);
    setState(actionTypes.UPDATE_THEME_SELECTION, value);
  }

  return {
    state,
    setTheme,
    setUserName,
  };
}

export { useAppState };
