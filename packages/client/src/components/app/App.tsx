import React, { FC } from 'react';

import Providers from '../../providers';

import Shell from '../Shell';
import { CssBaseline } from '@material-ui/core';

const App: FC = ({ children }) => (
  <CssBaseline>
    <Providers>
      <Shell>{children}</Shell>
    </Providers>
  </CssBaseline>
);

export default App;
