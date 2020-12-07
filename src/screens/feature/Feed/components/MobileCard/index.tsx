import React, { FC } from 'react';

import { Paper, Typography } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import getFullDateTimeFormat from 'helper/internationalization';
import { NewsDetail } from 'types/news';

const style = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      marginBottom: '2px',
      padding: '8px  10px 10px 10px',
    },
    imageContainer: {
      width: '40%',
      marginRight: '10px',
    },
    contentContainer: {
      width: '60%',
    },
    topic: {
      color: theme.palette.primary.main,
      lineHeight: 1,
      marginBottom: '10px',
      marginTop: '20px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    image: {
      height: '160px',
      objectFit: 'cover',
      width: '100%',
    },
    content: {
      display: '-webkit-box',
      height: '120px',
      marginBottom: '10px',
      overflow: 'hidden',
      WebkitLineClamp: 6,
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

const MobileCard: FC<Props> = ({ data }) => {
  const { content, imgSrc, time, topic } = data;

  const classes = makeStyles(style)();

  const formattedTime = getFullDateTimeFormat(time);

  return (
    <Paper className={classes.root} elevation={0} square>
      <div className={classes.imageContainer}>
        <img className={classes.image} alt="content" src={imgSrc} />
      </div>
      <div className={classes.contentContainer}>
        <Typography className={classes.topic} variant="h6">
          {topic}
        </Typography>
        <Typography className={classes.content} paragraph variant="body2">
          {content}
        </Typography>
        <Typography className={classes.time} variant="body2">
          {'Updated: '}
          {formattedTime}
        </Typography>
      </div>
    </Paper>
  );
};

export default MobileCard;
