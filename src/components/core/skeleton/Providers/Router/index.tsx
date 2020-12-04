import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import ScrollMemory from 'react-router-scroll-memory';

const Router: FC = ({ children }) => (
  <BrowserRouter>
    <ScrollMemory />
    <LastLocationProvider>{children}</LastLocationProvider>
  </BrowserRouter>
);

export default Router;
