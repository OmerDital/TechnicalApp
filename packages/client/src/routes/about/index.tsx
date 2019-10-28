import React from 'react';
import { Route } from 'react-router-dom';

import About from '../../components/about';

const aboutRoute = <Route key="about" path="/about" component={About} />;

export default aboutRoute;
