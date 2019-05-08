import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText, ListItemLink, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
}

export default ({ exercises, category,onDelete, onSelect, exercise: { id, title = 'Welcome ', description = 'Please select the exrecise' } }) => {
  return (
    <Grid container sm={12}>
      <Grid item sm={6}>
        <Paper style={styles.Paper}>
        { exercises.map(([ group, exercises ]) => {
          return (
            !category || category === group
              ? <Fragment key={group}>
                <Typography variant="headline" style={{ textTransform: 'capitalize' }}>
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(exercise =>
                    <ListItem button onClick={() => onSelect(exercise.id)} key={exercise.id}>
                      <ListItemText 
                        primary={exercise.title} 
                        />
                      <ListItemSecondaryAction>
                        <IconButton onClick={() => onDelete(exercise.id)}>
                          <Delete />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  )}
                </List>
              </Fragment>
            : null
            
          )
        })}
        </Paper>
      </Grid>
      <Grid item sm={6}>
        <Paper style={styles.Paper}>
          <Typography variant="display1">
            {title}
          </Typography>
          <Typography variant="subheading" style={{marginTop: 20}}>
            {description}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
} 