import React, { FC, useReducer } from 'react';

import { NewsContext, initialState, reducer } from './index';

export const NewsContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <NewsContext.Provider value={{ state, dispatch }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContextProvider;
