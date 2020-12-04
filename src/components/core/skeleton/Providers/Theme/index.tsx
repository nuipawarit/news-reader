import React, { FC } from 'react';

import { ThemeProvider } from '@material-ui/core';

import theme from 'config/theme';

const Theme: FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
