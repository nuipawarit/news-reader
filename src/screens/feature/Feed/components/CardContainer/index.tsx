import React, { FC } from 'react';

import { Grid, Typography } from '@material-ui/core';

import { NewsDetail } from 'types/news';

import Card from '../Card';

type Props = {
  data?: NewsDetail[];
};

const CardContainer: FC<Props> = ({ data }) => {
  if (!data) return <Typography>Loading...</Typography>;

  return (
    <Grid container spacing={5}>
      {data.map((detail) => (
        <Grid key={detail.id} item sm={4} xs={12}>
          <Card data={detail} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardContainer;
