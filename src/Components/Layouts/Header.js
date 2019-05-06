import React from 'react';
import  { AppBar, Toolbar, Typography } from '@material-ui/core';
import CreateDialog from '../Exercises/Dialog/Create';

const Header = () => {
  return (
      <AppBar position="static">
        <Toolbar>
        <Typography variant="headline" color="inherit" style={{flexGrow: 1}}>
          WorkOut
        </Typography>
          <CreateDialog />
        </Toolbar>
      </AppBar>
  )
}

export default Header;
