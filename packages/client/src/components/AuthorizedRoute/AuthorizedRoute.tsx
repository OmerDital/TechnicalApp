import React, { FC } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

//import { AuthContext } from '../../providers/AuthProvider';

const AuthorizedRoute: FC<RouteProps> = ({ children, ...props }) => {
  //const { user, getToken } = useContext(AuthContext);

  //TODO: implement server side
  const hasToken = true;
  return hasToken ? (
    <Route {...props}>{children}</Route>
  ) : (
    <Redirect to="/unauthorized" />
  );
};

export default AuthorizedRoute;
