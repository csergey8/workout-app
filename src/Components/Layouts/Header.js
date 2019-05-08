import React from 'react';
import  { AppBar, Toolbar, Typography } from '@material-ui/core';
import CreateDialog from '../Exercises/Dialog/Create';

const Header = (props) => {
  return (
      <AppBar position="static">
        <Toolbar>
        <Typography variant="headline" color="inherit" style={{flexGrow: 1}}>
          WorkOut
        </Typography>
          <CreateDialog 
          muscles={props.muscles} 
          onCreate={props.onExerciseCreate}
          />
        </Toolbar>
      </AppBar>
  )
}

export default Header;
