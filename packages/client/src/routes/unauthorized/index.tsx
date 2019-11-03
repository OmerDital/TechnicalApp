import React from 'react';

import Unauthorized from '../../components/Unauthorized';
import { Route } from 'react-router';

const unauthorizedRoute = (
  <Route key="unauthorized" path="/unauthorized">
    <Unauthorized />
  </Route>
);

export default unauthorizedRoute;
