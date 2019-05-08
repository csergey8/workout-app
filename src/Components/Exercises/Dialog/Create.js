import React, { Component, Fragment } from 'react';
import { 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle, 
  TextField, 
  Button, 
  FormControl,
  InputLabel,
  Select,
  MenuItem
  } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  FormControl: {
    width: 500
  }
})



export default withStyles(styles)(class Create extends Component {
  state = {
    open: false,
    exercise: {
      title: '',
      description: '',
      muscles: ''
    }
  }

  handleOpen = () => {
    this.setState({
      open: true
    })
  }
  handleClose = () => {
    this.setState({
      open: false
    })
  }

  handleChange = name => e => {
    this.setState({
      exercise: {
        ...this.state.exercise,
      [name]: e.target.value
      }
    })
  }
  

  handleSubmit = () => {


    const { exercise } = this.state
    
    this.props.onCreate({
      ...exercise,
      id: exercise.title.toLowerCase().replace(/ /g, '-')
    });
    this.setState({
      open: false,
      exercise: {
        title: '',
        description: '',
        muscles: ''
      }
    })
  }

  render() {
    const { open, exercise: { title, description, muscles }} = this.state,
      { classes, muscles: categories } = this.props;
    return (
      <Fragment>
      <Button variant="fab" mini >
        <Add onClick={this.handleOpen}/>
      </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
        >
          <DialogTitle id="form-dialog-title">
            Create a New Exercise 
          </DialogTitle>
          <DialogContent>
          <DialogContentText>
            Please, fill the form
          </DialogContentText>
          <form>
            <TextField
            label="Title"
            value={title}
            onChange={this.handleChange('title')}
            margin="normal"
            className={classes.FormControl}
          />
          <br/>
          <FormControl className={classes.FormControl}>
          <InputLabel htmlFor="muscles">Muscles</InputLabel>
          <Select
            value={muscles}
            onChange={this.handleChange('muscles')}
          > {categories.map(category => 
              <MenuItem value={category} key={category}>{category}</MenuItem>
            )}
          </Select>
        </FormControl>
        <br/>
          <TextField
            label="Description"
            value={description}
            multiline
            rows="4"
            onChange={this.handleChange('description')}
            margin="normal"
            className={classes.FormControl}
          />
          <br/>
          
          </form>
          </DialogContent>
          <DialogActions>
        <Button 
          color="primary" 
          variant="raised"
          onClick={this.handleSubmit}
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
      </Fragment>
    )
  }
})
