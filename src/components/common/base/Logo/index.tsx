import React, { FC } from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  logo: {
    width: 'auto',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%',
  },
});

const Logo: FC = () => {
  const classes = useStyles();

  return (
    <img
      alt="logo"
      className={classes.logo}
      src="https://via.placeholder.com/120"
    />
  );
};

export default Logo;
