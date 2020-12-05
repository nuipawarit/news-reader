import React, { FC } from 'react';

import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import Logo from 'components/common/base/Logo';

const MobileNavigationBar: FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box height="50px" ml="3px">
          <Logo />
        </Box>
        <Box flexGrow={1}>
          <Typography align="center" variant="h6">
            News
          </Typography>
        </Box>
        <IconButton edge="end" color="inherit">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default MobileNavigationBar;
