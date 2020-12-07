import React, { FC } from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';

import { ClassesProp } from 'types/ui';

const styles = createStyles({
  root: {
    width: 'auto',
    maxHeight: '100%',
    objectFit: 'cover',
    borderRadius: '50%',
  },
});

type Props = {
  classes?: ClassesProp<typeof styles>;
};

const Logo: FC<Props> = (props) => {
  const classes = makeStyles(styles)(props);

  return (
    <img
      alt="logo"
      className={classes.root}
      src="https://via.placeholder.com/120"
    />
  );
};

export default Logo;
