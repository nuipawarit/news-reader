import React, { FC } from 'react';

import { Body, Document, Head } from 'components/common/base/Page';

type Props = {};

const Feed: FC<Props> = () => {
  return (
    <Document>
      <Head title="Feed" />
      <Body>
        <h1 className="h6 mb-3">News Feed</h1>
      </Body>
    </Document>
  );
};

export default Feed;
