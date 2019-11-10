import React, { createContext, useState, FC } from 'react';
import SnackBar from './SnackBar';

interface contextProps {
  close: Function;
  open: Function;
}

const ErrorHandlerContext = createContext({} as contextProps);

const ErrorHandlerProvider: FC = ({ children }) => {
  const [message, setMessage] = useState<string>('');
  const [opened, setOpened] = useState(false);

  const open = (message: string) => {
    setMessage(message);
    setOpened(true);
  };

  const close = () => {
    setMessage('');
    setOpened(false);
  };

  return (
    <ErrorHandlerContext.Provider
      value={{
        close,
        open
      }}
    >
      <SnackBar message={message} opened={opened} handleClose={close} />
      {children}
    </ErrorHandlerContext.Provider>
  );
};

export default ErrorHandlerProvider;
export { ErrorHandlerContext };
