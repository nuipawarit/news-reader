import React, { FC } from 'react';

import { Paper, Typography } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import getFullDateTimeFormat from 'helper/internationalization';
import { NewsDetail } from 'types/news';

const style = (theme: Theme) =>
  createStyles({
    root: {
      padding: '20px  10px 15px 10px',
    },
    topic: {
      color: theme.palette.primary.main,
      lineHeight: 1,
      marginBottom: '20px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    image: {
      height: '160px',
      marginBottom: '10px',
      objectFit: 'cover',
      width: '100%',
    },
    content: {
      display: '-webkit-box',
      height: '200px',
      marginBottom: '10px',
      overflow: 'hidden',
      WebkitLineClamp: 10,
      WebkitBoxOrient: 'vertical',
    },
    time: {
      color: theme.palette.primary.dark,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  });

type Props = {
  data: NewsDetail;
};

const DesktopCard: FC<Props> = ({ data }) => {
  const { content, imgSrc, time, topic } = data;

  const classes = makeStyles(style)();

  const formattedTime = getFullDateTimeFormat(time);

  return (
    <Paper className={classes.root} square>
      <Typography className={classes.topic} variant="h6">
        {topic}
      </Typography>
      <img className={classes.image} alt="content" src={imgSrc} />
      <Typography className={classes.content} paragraph variant="body2">
        {content}
      </Typography>
      <Typography className={classes.time} variant="body2">
        {'Updated: '}
        {formattedTime}
      </Typography>
    </Paper>
  );
};

export default DesktopCard;
