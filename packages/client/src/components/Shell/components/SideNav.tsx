import React, { FC } from 'react';
import {
  makeStyles,
  createStyles,
  Theme,
  Paper,
  Avatar,
  Typography,
  Divider,
  Grid,
  Button
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import FindReplaceIcon from '@material-ui/icons/FindReplace';
import Android from '@material-ui/icons/Android';

const SideNav: FC = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.sideNav}>
      <Grid container direction="column" alignItems="center">
        <Avatar className={classes.avatar}>עד</Avatar>
        <Typography variant="h4">עומר דיטל</Typography>
        <Typography variant="body2">רמד טכנאי</Typography>
        <Divider variant="middle" className={classes.divider} />
        <Button
          component={NavLink}
          exact
          to="/"
          activeClassName={classes.isActive}
          className={classes.button}
        >
          <FindReplaceIcon className={classes.icon} />
          <Typography variant="body2">שנה ריסורסים</Typography>
        </Button>
        <Button
          component={NavLink}
          to="/otherFeature"
          activeClassName={classes.isActive}
          className={classes.button}
        >
          <Android className={classes.icon} />
          <Typography variant="body2">פיצ'ר אחר</Typography>
        </Button>
      </Grid>
    </Paper>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sideNav: {
      display: 'flex',
      flexDirection: 'column',
      bottom: '0',
      outline: 'none',
      overflowY: 'auto',
      padding: '16px'
    },
    avatar: {
      margin: 10,
      color: '#fff',
      backgroundColor: theme.palette.primary.main
    },
    divider: {
      width: '85%',
      margin: theme.spacing(1)
    },
    isActive: {
      color: theme.palette.primary.main
    },
    button: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      marginBottom: theme.spacing(1)
    },
    icon: {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1)
    }
  })
);

export default SideNav;
