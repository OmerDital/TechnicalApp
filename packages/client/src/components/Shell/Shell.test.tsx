import React from 'react';
import ReactDOM from 'react-dom';
import Shell from './';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <Shell />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
