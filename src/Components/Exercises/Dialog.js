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
import Form from './Form';






export default class Create extends Component {
  state = {
    open: false
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

  handleFormSubmit = exercise => {
    this.handleClose();

    this.props.onCreate(exercise);
  }


  render() {
    const { open } = this.state;
    const { muscles, onCreate } = this.props;
      
    return (
      <Fragment>
        <Button variant="fab" mini>
          <Add onClick={this.handleOpen} />
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose} fullWidth maxWidth='sm'>
          <DialogTitle id="form-dialog-title">
            Create a New Exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>Please, fill the form</DialogContentText>
            <Form
             muscles={muscles}
             onSubmit={this.handleFormSubmit} 
            />
          </DialogContent>
          <DialogActions>
            
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
