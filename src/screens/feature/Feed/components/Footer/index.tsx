import React, { FC, Fragment } from 'react';

import { Divider, Link, Paper, Typography } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const style = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      padding: '25px 20px 25px 21px',
    },
    linkContainer: {
      display: 'flex',
    },
    link: {
      fontWeight: theme.typography.fontWeightBold,
      lineHeight: 1,
      margin: '0 15px',
    },
    copyright: {
      color: theme.palette.primary.dark,
      marginLeft: 'auto',
    },
  });

const Footer: FC = () => {
  const classes = makeStyles(style)();

  const menus = ['News', 'Regions', 'Video', 'TV'];

  return (
    <Paper className={classes.root} square>
      <div className={classes.linkContainer}>
        {menus.map((menu, index) => (
          <Fragment key={menu}>
            {index > 0 && <Divider orientation="vertical" flexItem />}
            <Link className={classes.link} href="." color="primary">
              {menu}
            </Link>
          </Fragment>
        ))}
      </div>
      <Typography className={classes.copyright} variant="caption">
        Copy right © AMPOS
      </Typography>
    </Paper>
  );
};

export default Footer;
