import React, { Component } from 'react';
import { TextField, 
  Button, 
  FormControl,
  InputLabel,
  Select,
  MenuItem } from '@material-ui/core';

import { withStyles } from '@material-ui/core';

const styles = theme => ({
    FormControl: {
      width: 500
    }
  })

export default withStyles(styles)(class extends Component {

  state = this.getInitialState();

  componentWillReceiveProps({ exercise }) {
    this.setState({
      ...exercise
    })
  }

  getInitialState() {
    const { exercise } = this.props;
    return exercise ? exercise : {
      title: '',
      description: '',
      muscles: ''
    }
  }


  handleChange = name => e => {
    this.setState({
      [name]: e.target.value
    })
  }
  

  handleSubmit = () => {
    
    this.props.onSubmit({
      id: this.state.title.toLowerCase().replace(/ /g, '-'),
      ...this.state
    });
    this.setState(this.getInitialState());
  }

  render() {
    const { classes, muscles: categories } = this.props;
    const { title, muscles, description } = this.state;
    return (
      <form>
        <TextField
          label="Title"
          value={title}
          onChange={this.handleChange("title")}
          margin="normal"
          className={classes.FormControl}
        />
        <br />
        <FormControl className={classes.FormControl}>
          <InputLabel htmlFor="muscles">Muscles</InputLabel>
          <Select value={muscles} onChange={this.handleChange("muscles")}>
            {" "}
            {categories.map(category => (
              <MenuItem value={category} key={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />
        <TextField
          label="Description"
          value={description}
          multiline
          rows="4"
          onChange={this.handleChange("description")}
          margin="normal"
          className={classes.FormControl}
        />
        <br />
        <Button
          color="primary"
          variant="raised"
          onClick={this.handleSubmit}
        >
          { this.props.exercise ? 'Edit' : 'Create' }
        </Button>
      </form>
    );
  }       
})