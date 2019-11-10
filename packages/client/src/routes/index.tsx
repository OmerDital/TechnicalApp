import React, { FC, Suspense } from 'react';
import { Grid, createStyles, makeStyles } from '@material-ui/core';

import App from '../components/App/App';
import LoadingSpinner from '../components/LoadingCircular';

import changeResourcesRoute from './change-resources';
import aboutRoute from './about';
import otherFeatureRoute from './other-feature';
import unauthorizedRoute from './unauthorized';

import { BrowserRouter as Router, Switch } from 'react-router-dom';

const Routes: FC = () => {
  const classes = useStyles();

  return (
    <Router>
      <App>
        <Grid container className={classes.root}>
          <Suspense fallback={<LoadingSpinner />}>
            <Switch>
              {[
                changeResourcesRoute,
                aboutRoute,
                otherFeatureRoute,
                unauthorizedRoute
              ]}
            </Switch>
          </Suspense>
        </Grid>
      </App>
    </Router>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flex: 1
    }
  })
);

export default Routes;
