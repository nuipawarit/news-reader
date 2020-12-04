import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';

type Props = {
  title?: string;
};

const Head: FC<Props> = ({ children, title = '' }) => {
  const text = `News Reader · ${title}`;

  return (
    <Helmet>
      <title>{text}</title>
      {children}
    </Helmet>
  );
};

export default Head;
