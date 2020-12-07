import React, { FC } from 'react';

import { InputBase } from '@material-ui/core';
import {
  Theme,
  createStyles,
  fade,
  makeStyles,
} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

import { ClassesProp } from 'types/ui';

const styles = (theme: Theme) =>
  createStyles({
    root: {
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
      borderRadius: '8px',
      color: 'inherit',
      height: '100%',
      width: '100%',
    },
    inputInput: {
      padding: '10px',
      paddingLeft: 'calc(1em + 20px)',
      transition: theme.transitions.create('width'),
      width: '100%',
    },
  });

type Props = {
  classes?: ClassesProp<typeof styles>;
};

const SearchBox: FC<Props> = (props) => {
  const classes = makeStyles(styles)(props);

  return (
    <div className={classes.root}>
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
