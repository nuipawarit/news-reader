import React, { FC } from 'react';

import { Box, Hidden } from '@material-ui/core';

import Logo from 'components/common/base/Logo';
import SearchBox from 'components/common/base/SearchBox';

import DesktopNavigationBar from '../DesktopNavigationBar';
import MobileNavigationBar from '../MobileNavigationBar';

const Header: FC = () => {
  return (
    <>
      <Hidden xsDown>
        <Box height="120px" mr="80px">
          <Logo />
        </Box>
        <DesktopNavigationBar />
      </Hidden>
      <Hidden smUp>
        <MobileNavigationBar />
        <SearchBox />
      </Hidden>
    </>
  );
};

export default Header;
