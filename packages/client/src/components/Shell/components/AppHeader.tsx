import React, { FC } from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core';

const AppHeader: FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar variant="dense">
        <Typography variant="h6" className={classes.title}>
          אפליקציית טכנאי
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      minHeight: '64px',
      boxShadow: 'none',
      justifyContent: 'center'
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
);

export default AppHeader;
