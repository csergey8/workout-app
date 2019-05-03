import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText, ListItemLink } from '@material-ui/core';

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
}

export default ({ exercises }) => {
  return (
    <Grid container sm={12}>
      <Grid item sm={6}>
        <Paper style={styles.Paper}>
        { exercises.map(([ group, exercises ]) => {
          return (
            <Fragment>
              <Typography variant="headline" style={{ textTransform: 'capitalize' }}>
                {group}
              </Typography>
              <List component="ul">
                {exercises.map(exercise =>
                  <ListItem button>
                    <ListItemText primary={exercise.title} />
                  </ListItem>
                  )}
              </List>
            </Fragment>
          )
        })}
        </Paper>
      </Grid>
      <Grid item sm={6}>
        <Paper style={styles.Paper}>
          <Typography variant="display1">
            Welcome 
          </Typography>
          <Typography variant="subheading" style={{marginTop: 20}}>
          Please select the exrecise
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
} 