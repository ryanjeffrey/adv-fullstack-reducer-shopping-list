import { createContext, useReducer } from 'react';
import {
  initialState,
  reducer,
} from '../reducers/shopping-list-item-reducer.js';

export const Context = createContext({
  state: initialState(),
  reducer,
});

export const ShoppingListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState());
  const contextObj = { state, dispatch };
  return (
    <Context.Provider value={contextObj}>
      {children}
    </Context.Provider>
  );
};
