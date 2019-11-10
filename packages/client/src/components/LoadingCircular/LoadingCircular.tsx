import React, { FC } from 'react';

import { CircularProgress, makeStyles, createStyles } from '@material-ui/core';

const LoadingCircular: FC = () => {
  const classes = useStyles();

  return <CircularProgress size={300} className={classes.circular} />;
};

const useStyles = makeStyles(() =>
  createStyles({
    circular: {
      position: 'absolute',
      top: 'calc(50% - 300px)',
      left: 'calc(50% - 300px)'
    }
  })
);

export default LoadingCircular;
