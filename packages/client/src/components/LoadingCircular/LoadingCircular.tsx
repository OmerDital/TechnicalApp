import React, { FC } from 'react';

import { CircularProgress, makeStyles, createStyles } from '@material-ui/core';

interface LoadingCircularProps {
  isLoading: boolean;
  error: string;
}

const LoadingCircular: FC<LoadingCircularProps> = ({ isLoading, error }) => {
  const classes = useStyles();

  if (isLoading) {
    return <CircularProgress size={100} className={classes.circular} />;
  }
  //TODO: handle error
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  } else {
    return null;
  }
};

const useStyles = makeStyles(() =>
  createStyles({
    circular: {
      position: 'relative',
      top: 'calc(50% - 100px)',
      left: 'calc(50% - 100px)'
    }
  })
);

export default LoadingCircular;
