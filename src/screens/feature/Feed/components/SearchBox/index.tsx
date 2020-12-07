import React, { ChangeEvent, FC, useContext } from 'react';

import { InputBase } from '@material-ui/core';
import {
  Theme,
  createStyles,
  fade,
  makeStyles,
} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { debounce } from 'lodash';

import { ClassesProp } from 'types/ui';

import { NewsContext } from '../../../../../state';

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
  const { dispatch = () => {} } = useContext(NewsContext);

  const callback = debounce((text: string) => {
    dispatch({
      type: 'SEARCH',
      payload: { text },
    });
  }, 200);

  const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    callback(e.target.value);

  return (
    <div className={classes.root}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        placeholder="Search"
        onChange={onInputChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
