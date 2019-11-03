import React from 'react';
import ReactDOM from 'react-dom';
import LoadingCircular from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoadingCircular />, div);
  ReactDOM.unmountComponentAtNode(div);
});
