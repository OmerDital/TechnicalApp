import React, { lazy } from 'react';

import AuthorizedRoute from '../../components/AuthorizedRoute';

const ChangeResources = lazy(() => import('../../components/ChangeResources'));

const changeResourcesRoute = (
  <AuthorizedRoute key="changeResources" exact path="/">
    <ChangeResources />
  </AuthorizedRoute>
);

export default changeResourcesRoute;
