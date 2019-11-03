import React from 'react';

import About from '../../components/about';
import AuthorizedRoute from '../../components/AuthorizedRoute/AuthorizedRoute';

const aboutRoute = (
  <AuthorizedRoute key="about" path="/about">
    <About />
  </AuthorizedRoute>
);

export default aboutRoute;
