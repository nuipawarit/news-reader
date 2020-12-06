import React, { FC } from 'react';

import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Theme, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import Logo from 'components/common/base/Logo';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  toolbar: {
    paddingLeft: '15px',
    paddingRight: '15px',
  },
}));

const MobileNavigationBar: FC = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar className={classes.toolbar}>
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
