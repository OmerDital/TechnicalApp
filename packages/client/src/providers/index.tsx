import React, { FC } from 'react';
import AuthProvider from './AuthProvider';
import theme from './ThemeProvider';
import { ThemeProvider } from '@material-ui/styles';

const providers: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <AuthProvider>{children}</AuthProvider>
  </ThemeProvider>
);

export default providers;
