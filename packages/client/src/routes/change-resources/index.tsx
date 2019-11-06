import React from 'react';

import Loading from '../../components/LoadingCircular';
import AuthorizedRoute from '../../components/AuthorizedRoute';

import Loadable from 'react-loadable';

const AsyncChangeResources = Loadable({
  loader: () => import('../../components/ChangeResources'),
  loading: Loading
});

const changeResourcesRoute = (
  <AuthorizedRoute key="changeResources" exact path="/">
    <AsyncChangeResources />
  </AuthorizedRoute>
);

export default changeResourcesRoute;
