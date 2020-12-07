import React, { FC } from 'react';

import { Button } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const style = (theme: Theme) =>
  createStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, 0.25)',
      backgroundColor: theme.palette.common.white,
      display: 'block',
      lineHeight: 1,
      minWidth: '100%',
      padding: '15px',
      textTransform: 'none',
    },
  });

type Props = {};

const LoadMoreButton: FC<Props> = () => {
  const classes = makeStyles(style)();

  return <Button className={classes.root}>Load More</Button>;
};

export default LoadMoreButton;
