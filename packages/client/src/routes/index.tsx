import React, { FC } from 'react';

import App from '../components/App/App';

import homeRoute from './home';
import aboutRoute from './about';
import unauthorizedRoute from './unauthorized';

import { BrowserRouter as Router, Switch } from 'react-router-dom';

const Routes: FC = () => {
  return (
    <Router>
      <App>
        <Switch>{[homeRoute, aboutRoute, unauthorizedRoute]}</Switch>
      </App>
    </Router>
  );
};

export default Routes;
