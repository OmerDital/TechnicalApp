import React from 'react';
import ReactDOM from 'react-dom';
import ChangeResources from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChangeResources />, div);
  ReactDOM.unmountComponentAtNode(div);
});
