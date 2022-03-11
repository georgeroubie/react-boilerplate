import { useReducer } from 'react';
import { getCurrentTheme, saveThemeSelection } from '../theme/themes/helpers';
import * as actionTypes from './actions';
import { appReducer } from './reducer';

const useAppState = () => {
  const [state, dispatch] = useReducer(appReducer, {
    userName: 'friend',
    theme: getCurrentTheme(),
  });

  const setState = (type, value) => {
    dispatch({ type, value });
  };

  const setUserName = (value) => {
    setState(actionTypes.UPDATE_USER_NAME, value);
  };

  const setTheme = (value) => {
    saveThemeSelection(value);
    setState(actionTypes.UPDATE_THEME_SELECTION, value);
  };

  return {
    state,
    setTheme,
    setUserName,
  };
};

export { useAppState };
