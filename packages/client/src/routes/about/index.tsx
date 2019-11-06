import React from 'react';

import Loadable from 'react-loadable';

import Loading from '../../components/LoadingCircular';
import AuthorizedRoute from '../../components/AuthorizedRoute';

const AsyncAbout = Loadable({
  loader: () => import('../../components/About'),
  loading: Loading
});

const aboutRoute = (
  <AuthorizedRoute key="about" path="/about">
    <AsyncAbout />
  </AuthorizedRoute>
);

export default aboutRoute;
