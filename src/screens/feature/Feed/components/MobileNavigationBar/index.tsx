import React, { FC } from 'react';

import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import Logo from 'components/common/base/Logo';
import { ClassesProp } from 'types/ui';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    toolbar: {
      paddingLeft: '15px',
      paddingRight: '15px',
    },
    logoRoot: {
      height: '50px',
      marginLeft: '3px',
    },
  });

type Props = {
  classes?: ClassesProp<typeof styles>;
};

const MobileNavigationBar: FC<Props> = (props) => {
  const classes = makeStyles(styles)(props);

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar className={classes.toolbar}>
        <Logo classes={{ root: classes.logoRoot }} />
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
