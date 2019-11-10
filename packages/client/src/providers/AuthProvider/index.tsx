import React, { createContext, FC, useState, useEffect } from 'react';

import {
  setLocalStorage,
  removeFromLocalStorage,
  getFromLocalStorage
} from '../../utilitis/local-storage';

import useFetch from '../../utilitis/hooks/api/useFetch';

interface user {
  username: string;
  firstName: string;
  lastName: string;
}

interface authProps {
  token: string;
  user: user | null;
}

interface contextProps {
  user: user | null;
  getToken: Function;
  ensureAuthorized: Function;
  setAuth: Function;
  setLoggedOut: Function;
}

const AuthContext = createContext({} as contextProps);

const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<user | null>(null);
  const [me] = useFetch('me');

  const setAuth = async ({ token, user: newUser }: authProps) => {
    if (token) {
      setLocalStorage({ key: 'token', value: token });
      setUser(newUser);
    }
  };

  const setLoggedOut = () => {
    setUser(null);
    removeFromLocalStorage({ key: 'token' });
  };

  const getToken = () => getFromLocalStorage({ key: 'token' });
  const ensureAuthorized = () => getToken() || user;

  useEffect(() => {
    const resolveUser = async () => {
      const localToken = getToken();

      if (localToken) {
        setUser(me);
      }
    };

    resolveUser();
  }, [me]);

  return (
    <AuthContext.Provider
      value={{
        user,
        getToken,
        ensureAuthorized,
        setAuth,
        setLoggedOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
