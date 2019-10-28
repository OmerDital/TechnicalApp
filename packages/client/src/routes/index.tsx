import React, { FC } from 'react';

import App from '../components/app/App';
import homeRoute from './home';
import aboutRoute from './about';

import { BrowserRouter as Router, Switch } from 'react-router-dom';

const Routes: FC = () => (
  <Router>
    <App>
      <Switch>{[homeRoute, aboutRoute]}</Switch>
    </App>
  </Router>
);

export default Routes;
