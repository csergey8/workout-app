import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText, ListItemLink, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { withStyles } from '@material-ui/core';
import Form from './Form';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    overflowY: 'auto',
    [theme.breakpoints.up('sm')]:{
      marginTop: 5,
      height: 'calc(100% - 10px)',
    },
    [theme.breakpoints.down('xs')]:{
      height: '100%'
    }
  },
  '@global': {
    'html, body, #root': {
      height: '100%'
    }
  },
  container: {
    [theme.breakpoints.up('sm')]:{
      height: 'calc(100% - 64px - 48px)'
    },
    [theme.breakpoints.down('xs')]:{
      height: 'calc(100% - 56px - 48px)'
    }
  },
  item: {
    [theme.breakpoints.down('xs')]:{
    height: '50%'
    }
  }
})

export default withStyles(styles)(({
  classes,
  exercises,
  exercise, 
  category,
  muscles,
  editMode,
  onDelete,
  onSelect,
  onSelectEdit,
  onEdit,
  exercise: {
    id,
    title = "Welcome ",
    description = "Please select the exrecise",
  },
}) => {
  return (
    <Grid container sm={12} className={classes.container}>
      <Grid item xs={12} sm={6} className={classes.item}>
        <Paper className={classes.paper}>
          {exercises.map(([group, exercises]) => {
            return !category || category === group ? (
              <Fragment key={group}>
                <Typography
                  variant="headline"
                  style={{ textTransform: "capitalize" }}
                  color='secondary'
                >
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(exercise => (
                    <ListItem
                      button
                      onClick={() => onSelect(exercise.id)}
                      key={exercise.id}
                    >
                      <ListItemText primary={exercise.title} />
                      <ListItemSecondaryAction>
                        <IconButton onClick={() => onSelectEdit(exercise.id)} color="primary">
                          <Edit />
                        </IconButton>
                        <IconButton onClick={() => onDelete(exercise.id)} color="primary">
                          <Delete />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null;
          })}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.item}>
        <Paper className={classes.paper}>
        <Typography variant="display1" gutterBottom color='secondary'>{title}</Typography>
          {editMode ? (
            <Fragment>
              <Form
                key={id}
                exercise={exercise}
                muscles={muscles}
                onSubmit={onEdit}
              />
            </Fragment>
          ) : (
            
              
              <Typography variant="subheading">
                {description}
              </Typography>
  
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}); 