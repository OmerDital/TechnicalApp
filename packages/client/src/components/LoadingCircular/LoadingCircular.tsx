import React, { FC } from 'react';

import { CircularProgress } from '@material-ui/core';

interface LoadingCircularProps {
  isLoading: boolean;
  error: string;
}

const LoadingCircular: FC<LoadingCircularProps> = ({ isLoading, error }) => {
  if (isLoading) {
    return <CircularProgress size={100} />;
  }
  //TODO: handle error
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  } else {
    return null;
  }
};

export default LoadingCircular;
