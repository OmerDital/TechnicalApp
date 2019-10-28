import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../../components/home';

const aboutRoute = <Route key="home" exact path="/" component={Home} />;

export default aboutRoute;
