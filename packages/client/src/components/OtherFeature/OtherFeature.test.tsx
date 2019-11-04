import React from 'react';
import ReactDOM from 'react-dom';
import OtherFeature from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OtherFeature />, div);
  ReactDOM.unmountComponentAtNode(div);
});
