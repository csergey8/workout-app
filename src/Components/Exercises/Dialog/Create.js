import React, { Component, Fragment } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';




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
  render() {
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
  
          </form>
          </DialogContent>
          <DialogActions>
        <Button color="primary" variant="raised">
          Create
        </Button>
      </DialogActions>
    </Dialog>
      </Fragment>
    )
  }
}
