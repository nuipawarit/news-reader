import React, { FC } from 'react';

import { Box, Hidden } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import Logo from 'components/common/base/Logo';

import DesktopNavigationBar from '../DesktopNavigationBar';
import MobileNavigationBar from '../MobileNavigationBar';
import SearchBox from '../SearchBox';

const style = createStyles({
  logoRoot: {
    height: '120px',
    marginRight: '80px',
  },
});

const Header: FC = () => {
  const classes = makeStyles(style)();

  return (
    <>
      <Hidden xsDown>
        <Box alignItems="center" display="flex">
          <Logo classes={{ root: classes.logoRoot }} />
          <DesktopNavigationBar />
        </Box>
      </Hidden>
      <Hidden smUp>
        <Box>
          <MobileNavigationBar />
          <SearchBox />
        </Box>
      </Hidden>
    </>
  );
};

export default Header;
