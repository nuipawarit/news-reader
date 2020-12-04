/* eslint-disable react/prop-types */
import React from 'react';

import NOTES from 'stories/common/notes';

import Document from './index';

const defaultProps = {
  children: <div>Placeholder</div>,
};

export default {
  parameters: {
    notes: NOTES.minimal,
  },
  title: 'Components|Common/Base/Page/Document',
};

export const normal = () => {
  const props = { ...defaultProps };
  const { children } = props;

  return <Document>{children}</Document>;
};
