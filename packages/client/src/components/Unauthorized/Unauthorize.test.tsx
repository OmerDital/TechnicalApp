import React from 'react';
import ReactDOM from 'react-dom';
import Unauthorize from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Unauthorize />, div);
  ReactDOM.unmountComponentAtNode(div);
});
