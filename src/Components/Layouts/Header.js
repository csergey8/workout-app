import React from 'react';
import  { AppBar, Toolbar, Typography } from '@material-ui/core';
import CreateDialog from '../Exercises/Dialog';
import { withStyles } from '@material-ui/core/styles';

const style = {
  flex: {
    flexGrow: 1
  }
}

const Header = (props) => {
  return (
      <AppBar position="static">
        <Toolbar>
        <Typography variant="headline" color="inherit" className={props.classes.flex}>
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

export default withStyles(style)(Header);
