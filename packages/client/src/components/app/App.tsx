import React, { FC } from 'react';

import Providers from '../../providers';

import Shell from '../shell';

const App: FC = ({ children }) => (
  <Providers>
    <Shell />
    {children}
  </Providers>
);

export default App;
