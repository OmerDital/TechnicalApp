import React from 'react';

import Home from '../../components/Home';
import AuthorizedRoute from '../../components/AuthorizedRoute';

const homeRoute = (
  <AuthorizedRoute key="home" exact path="/">
    <Home />
  </AuthorizedRoute>
);

export default homeRoute;
