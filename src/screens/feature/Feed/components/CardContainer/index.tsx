import React, { FC, useContext } from 'react';

import { Grid, Hidden } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import { NewsContext } from 'state';

import DesktopCard from '../DesktopCard';
import MobileCard from '../MobileCard';

const style = (theme: Theme) =>
  createStyles({
    gridContainer: {
      [theme.breakpoints.up('sm')]: {
        margin: '-20px',
        width: 'calc(100% + 40px)',
      },
    },
    gridItem: {
      [theme.breakpoints.up('sm')]: {
        marginBottom: '5px',
        padding: '20px',
      },
    },
  });

const CardContainer: FC = () => {
  const classes = makeStyles(style)();
  const { state } = useContext(NewsContext);
  const { filtered: data } = state.data;

  return (
    <Grid classes={{ container: classes.gridContainer }} container>
      {data.map((detail) => (
        <Grid
          key={detail.id}
          classes={{ item: classes.gridItem }}
          item
          sm={4}
          xs={12}
        >
          <Hidden xsDown>
            <DesktopCard data={detail} />
          </Hidden>
          <Hidden smUp>
            <MobileCard data={detail} />
          </Hidden>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardContainer;
