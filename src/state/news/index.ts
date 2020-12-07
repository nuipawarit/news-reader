import { Dispatch, createContext } from 'react';

import MOCKS from 'mocks';
import { NewsDetail } from 'types/news';

const filter = (data: NewsDetail[], text: string) =>
  data.filter(
    (item) => item.topic.includes(text) || item.content.includes(text),
  );

export const initialState = {
  criteria: {
    text: '',
  },
  data: {
    raw: MOCKS.data.news,
    filtered: MOCKS.data.news,
  },
};

export type NewsState = typeof initialState;
export type NewsAction = {
  type: string;
  payload?: {
    text: string;
  };
};

export const NewsContext = createContext<{
  state: NewsState;
  dispatch?: Dispatch<NewsAction>;
}>({ state: initialState });

export const reducer = (state: NewsState, action: NewsAction) => {
  switch (action.type) {
    case 'SEARCH': {
      const { text } = state.criteria;
      const { raw } = state.data;
      const filtered = filter(raw, text);

      return {
        ...state,
        data: {
          ...state.data,
          filtered,
        },
      };
    }
    case 'LOAD_MORE': {
      const { text } = state.criteria;
      const generated = MOCKS.generator.news();
      const newRawData = [...state.data.raw, ...generated];
      const filtered = filter(newRawData, text);

      return {
        ...state,
        data: {
          raw: newRawData,
          filtered,
        },
      };
    }
    default:
      throw new Error();
  }
};
