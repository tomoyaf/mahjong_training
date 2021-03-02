import { createContext, useEffect, useReducer, useState } from 'react';

import { exercise } from './reducers/exercise';

const initialState = {
  exercise: {
    state: "",
    exercises: [],
    ansers: [],
  },
};

const Context = createContext({});

const combineReducers = (...reducers) => (state, action) => {
  for (let i = 0; i < reducers.length; i++) {
    state = reducers[i](state, action);
  }
  return state;
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(combineReducers(exercise), initialState);
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };
