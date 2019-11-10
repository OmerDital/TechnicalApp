import React, { FC, SyntheticEvent } from 'react';
import { Snackbar } from '@material-ui/core';

interface snackBarProps {
  opened: boolean;
  handleClose: (event: SyntheticEvent<any, Event>, reason: string) => void;
  message: string;
}

const TechSnackBar: FC<snackBarProps> = ({ opened, handleClose, message }) => (
  <Snackbar
    open={opened}
    message={message}
    onClose={handleClose}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left'
    }}
    autoHideDuration={4000}
  />
);

export default TechSnackBar;
