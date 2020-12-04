/* eslint-disable react/prop-types */
import React from 'react';

import NOTES from 'stories/common/notes';

import Theme from './index';

const defaultProps = {
  children: <div>Placeholder</div>,
};

export default {
  parameters: {
    notes: NOTES.hoc,
  },
  title: 'Components|Core/Skeleton/Providers/Theme',
};

export const normal = () => {
  const props = { ...defaultProps };
  const { children } = props;

  return <Theme>{children}</Theme>;
};
