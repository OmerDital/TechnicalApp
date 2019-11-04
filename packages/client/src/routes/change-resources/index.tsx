import React from 'react';

import ChangeResources from '../../components/ChangeResources';
import AuthorizedRoute from '../../components/AuthorizedRoute';

const changeResourcesRoute = (
  <AuthorizedRoute key="changeResources" exact path="/">
    <ChangeResources />
  </AuthorizedRoute>
);

export default changeResourcesRoute;
