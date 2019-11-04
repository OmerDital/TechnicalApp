import React, { FC } from 'react';

import App from '../components/App/App';

import changeResourcesRoute from './change-resources';
import aboutRoute from './about';
import otherFeatureRoute from './other-feature';
import unauthorizedRoute from './unauthorized';

import { BrowserRouter as Router, Switch } from 'react-router-dom';

const Routes: FC = () => {
  return (
    <Router>
      <App>
        <Switch>
          {[
            changeResourcesRoute,
            aboutRoute,
            otherFeatureRoute,
            unauthorizedRoute
          ]}
        </Switch>
      </App>
    </Router>
  );
};

export default Routes;
