import React, { FC } from 'react';
import AuthProvider from './AuthProvider';

const providers: FC = ({ children }) => <AuthProvider>{children}</AuthProvider>;

export default providers;
