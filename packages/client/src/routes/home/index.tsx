import React from 'react';

import Home from '../../components/home';
import AuthorizedRoute from '../../components/AuthorizedRoute/AuthorizedRoute';

const homeRoute = (
  <AuthorizedRoute key="home" exact path="/">
    <Home />
  </AuthorizedRoute>
);

export default homeRoute;
