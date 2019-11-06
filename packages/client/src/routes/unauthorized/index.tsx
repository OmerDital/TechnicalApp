import React from 'react';

import Loading from '../../components/LoadingCircular';

import { Route } from 'react-router';
import Loadable from 'react-loadable';

const AsyncUnauthorized = Loadable({
  loader: () => import('../../components/Unauthorized'),
  loading: Loading
});

const unauthorizedRoute = (
  <Route key="unauthorized" path="/unauthorized">
    <AsyncUnauthorized />
  </Route>
);

export default unauthorizedRoute;
