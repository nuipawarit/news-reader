/* eslint-disable react/prop-types */
import React from 'react';

import NOTES from 'stories/common/notes';

import Wrapper from './index';

const defaultProps = {
  children: <div>Placeholder</div>,
};

export default {
  parameters: {
    notes: NOTES.minimal,
  },
  title: 'Components|Core/Layout/Wrapper',
};

export const normal = () => {
  const props = { ...defaultProps };
  const { children } = props;

  return <Wrapper>{children}</Wrapper>;
};
