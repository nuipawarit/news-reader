import React, { FC } from 'react';

import { InputBase } from '@material-ui/core';
import {
  Theme,
  createStyles,
  fade,
  makeStyles,
} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchBox: {
      position: 'relative',
      padding: '10px',
      width: '100%',

      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
    },
    searchIcon: {
      color: theme.palette.text.disabled,
      padding: '0 0 0 10px',
      height: 'calc(100% - 20px)',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1110,
    },
    inputRoot: {
      backgroundColor: theme.palette.common.white,
      borderRadius: theme.shape.borderRadius,
      color: 'inherit',
      width: '100%',
    },
    inputInput: {
      padding: '10px',
      paddingLeft: 'calc(1em + 20px)',
      transition: theme.transitions.create('width'),
      width: '100%',

      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }),
);

const SearchBox: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.searchBox}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
      />
    </div>
  );
};

export default SearchBox;
