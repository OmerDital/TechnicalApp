import React, { FC } from 'react';

import { Box } from '@material-ui/core';

import Shell from '../shell';

const App: FC = ({ children }) => (
  <Box>
    <Shell />
    {children}
  </Box>
);

export default App;
