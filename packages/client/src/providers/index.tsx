import React, { FC } from 'react';
import AuthProvider from './AuthProvider';
import ErrorHandlerProvider from './ErrorHandlerProvider';
import theme from './ThemeProvider';
import { ThemeProvider } from '@material-ui/styles';

const providers: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <ErrorHandlerProvider>
      <AuthProvider>{children}</AuthProvider>
    </ErrorHandlerProvider>
  </ThemeProvider>
);

export default providers;
