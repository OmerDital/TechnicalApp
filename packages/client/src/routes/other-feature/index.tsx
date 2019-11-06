import React from 'react';

import Loading from '../../components/LoadingCircular';
import AuthorizedRoute from '../../components/AuthorizedRoute';

import Loadable from 'react-loadable';

const AsyncOtherFeature = Loadable({
  loader: () => import('../../components/OtherFeature'),
  loading: Loading
});

const otherFeatureRoute = (
  <AuthorizedRoute key="otherFeature" path="/otherFeature">
    <AsyncOtherFeature />
  </AuthorizedRoute>
);

export default otherFeatureRoute;
