import React, { FC, useContext } from 'react';

import { Button } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import { NewsContext } from 'state';

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

const LoadMoreButton: FC = () => {
  const classes = makeStyles(style)();
  const { dispatch = () => {} } = useContext(NewsContext);

  const onClickHandler = () => {
    dispatch({
      type: 'LOAD_MORE',
    });
  };

  return (
    <Button className={classes.root} onClick={onClickHandler}>
      Load More
    </Button>
  );
};

export default LoadMoreButton;
