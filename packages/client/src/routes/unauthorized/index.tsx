import React, { lazy } from 'react';

import { Route } from 'react-router';

const Unauthorized = lazy(() => import('../../components/Unauthorized'));

const unauthorizedRoute = (
  <Route key="unauthorized" path="/unauthorized">
    <Unauthorized />
  </Route>
);

export default unauthorizedRoute;
