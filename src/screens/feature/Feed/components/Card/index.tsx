import React, { FC } from 'react';

import { Paper } from '@material-ui/core';

import { NewsDetail } from 'types/news';

type Props = {
  data: NewsDetail;
};

const Card: FC<Props> = ({ data }) => {
  const { topic } = data;

  return <Paper>{topic}</Paper>;
};

export default Card;
