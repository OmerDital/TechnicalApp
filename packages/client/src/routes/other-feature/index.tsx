import React from 'react';

import OtherFeature from '../../components/OtherFeature';
import AuthorizedRoute from '../../components/AuthorizedRoute';

const changeResourcesRoute = (
  <AuthorizedRoute key="otherFeature" path="/otherFeature">
    <OtherFeature />
  </AuthorizedRoute>
);

export default changeResourcesRoute;
