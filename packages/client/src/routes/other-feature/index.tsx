import React, { lazy } from 'react';

import AuthorizedRoute from '../../components/AuthorizedRoute';

const OtherFeature = lazy(() => import('../../components/OtherFeature'));

const otherFeatureRoute = (
  <AuthorizedRoute key="otherFeature" path="/otherFeature">
    <OtherFeature />
  </AuthorizedRoute>
);

export default otherFeatureRoute;
