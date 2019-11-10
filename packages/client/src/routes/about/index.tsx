import React, { lazy } from 'react';

import AuthorizedRoute from '../../components/AuthorizedRoute';

const About = lazy(() => import('../../components/About'));

const aboutRoute = (
  <AuthorizedRoute key="about" path="/about">
    <About />
  </AuthorizedRoute>
);

export default aboutRoute;
