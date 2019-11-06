import React, { FC } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { makeStyles, createStyles } from '@material-ui/core';

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

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1
    }
  })
);

export default AuthorizedRoute;
