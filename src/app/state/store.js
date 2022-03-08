import { useReducer } from 'react';
import * as actionTypes from './actions';
import { appReducer } from './reducer';

const useAppState = () => {
  const [state, dispatch] = useReducer(appReducer, {
    userName: 'friend',
  });

  const setState = (type, value) => {
    dispatch({ type, value });
  };

  const setUserName = (value) => {
    setState(actionTypes.UPDATE_USER_NAME, value);
  };

  return {
    state,
    setUserName,
  };
};

export { useAppState };
