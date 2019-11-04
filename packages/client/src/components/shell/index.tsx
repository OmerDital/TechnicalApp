import React, { FC } from 'react';

import AppHeader from './components/AppHeader';
import SideNav from './components/SideNav';
import { Grid, makeStyles, createStyles, Theme } from '@material-ui/core';

const Shell: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.root}>
      <AppHeader />
      <Grid container direction="row" className={classes.root}>
        <SideNav />
        {children}
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    }
  })
);

export default Shell;
