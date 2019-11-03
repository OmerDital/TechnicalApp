import React from 'react';

import About from '../../components/About';
import AuthorizedRoute from '../../components/AuthorizedRoute';

const aboutRoute = (
  <AuthorizedRoute key="about" path="/about">
    <About />
  </AuthorizedRoute>
);

export default aboutRoute;
