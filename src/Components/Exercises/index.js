import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText, ListItemLink, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { withStyles } from '@material-ui/core';
import Form from './Form';

const styles = theme => ({
  Paper: {
    padding: 20,
    marginTop: 5,
    height: 500,
    overflowY: 'auto'
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
    <Grid container sm={12}>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.Paper}>
          {exercises.map(([group, exercises]) => {
            return !category || category === group ? (
              <Fragment key={group}>
                <Typography
                  variant="headline"
                  style={{ textTransform: "capitalize" }}
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
                        <IconButton onClick={() => onSelectEdit(exercise.id)}>
                          <Edit />
                        </IconButton>
                        <IconButton onClick={() => onDelete(exercise.id)}>
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
      <Grid item xs={12} sm={6}>
        <Paper className={classes.Paper}>
          {editMode ? (
            <Fragment>
              <Form
                exercise={exercise}
                muscles={muscles}
                onSubmit={onEdit}
              />
            </Fragment>
          ) : (
            <Fragment>
              <Typography variant="display1">{title}</Typography>
              <Typography variant="subheading" style={{ marginTop: 20 }}>
                {description}
              </Typography>
            </Fragment>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}); 