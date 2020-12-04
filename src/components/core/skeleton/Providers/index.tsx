import React, { FC } from 'react';
import { HelmetProvider as Helmet } from 'react-helmet-async';

import Router from './Router';
import Theme from './Theme';

const Providers: FC = ({ children }) => (
  <Helmet>
    <Router>
      <Theme>{children}</Theme>
    </Router>
  </Helmet>
);
export default Providers;
