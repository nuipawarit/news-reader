/* eslint-disable react/prop-types */
import React from 'react';

import Head from './index';

const defaultProps = {
  children: (
    <meta content="Define a description of a web page" name="description" />
  ),
};

export default {
  parameters: {
    notes: {
      markdown: `**No view layer** - This component will manage all of changes to the document head. It takes plain HTML tags and outputs plain HTML tags. For more information, see [rect-helmet](https://github.com/nfl/react-helmet).
    `,
    },
  },
  title: 'Components|Common/Base/Page/Head',
};

export const normal = () => {
  const props = { ...defaultProps };
  const { children } = props;

  return <Head>{children}</Head>;
};
