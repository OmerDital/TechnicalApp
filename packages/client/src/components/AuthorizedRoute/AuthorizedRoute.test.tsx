import React from 'react';
import ReactDOM from 'react-dom';
import AuthorizedRoute from './';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <AuthorizedRoute />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
