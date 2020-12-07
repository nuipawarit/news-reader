import React, { FC } from 'react';

import { Grid, Hidden, Typography } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import { NewsDetail } from 'types/news';

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

type Props = {
  data?: NewsDetail[];
};

const CardContainer: FC<Props> = ({ data }) => {
  const classes = makeStyles(style)();

  if (!data) return <Typography>Loading...</Typography>;

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
