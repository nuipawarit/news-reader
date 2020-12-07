import React, { FC } from 'react';

import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import {
  Theme,
  createStyles,
  fade,
  makeStyles,
} from '@material-ui/core/styles';

import { ClassesProp } from 'types/ui';

import SearchBox from '../SearchBox';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      width: '100%',
      height: 'auto',
    },
    button: {
      color: theme.palette.common.white,
      backgroundColor: fade(theme.palette.common.white, 0.25),
      fontWeight: theme.typography.fontWeightBold,
      height: '48px',
      margin: '1px',
      minWidth: '120px',
    },
    searchBoxRoot: {
      height: '50px',
    },
    searchIconRoot: {
      color: `${theme.palette.common.white} !important`,
    },
    searchBoxInputRoot: {
      backgroundColor: `${fade(theme.palette.common.white, 0.25)} !important`,
      color: `${theme.palette.common.white} !important`,
      '& ::placeholder': {
        color: `${theme.palette.common.white} !important`,
      },
    },
  });

type Props = {
  classes?: ClassesProp<typeof styles>;
};

const DesktopNavigationBar: FC<Props> = (props) => {
  const classes = makeStyles(styles)(props);

  const menus = ['News', 'Regions', 'Video', 'TV'];

  return (
    <BottomNavigation showLabels className={classes.root}>
      {menus.map((menu) => (
        <BottomNavigationAction
          key={menu}
          className={classes.button}
          label={menu}
        />
      ))}
      <SearchBox
        classes={{
          root: classes.searchBoxRoot,
          searchIcon: classes.searchIconRoot,
          inputRoot: classes.searchBoxInputRoot,
        }}
      />
    </BottomNavigation>
  );
};

export default DesktopNavigationBar;
