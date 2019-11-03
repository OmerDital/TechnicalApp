import React, { FC } from 'react';

import Providers from '../../providers';

import Shell from '../Shell';

const App: FC = ({ children }) => (
  <Providers>
    <Shell />
    {children}
  </Providers>
);

export default App;
