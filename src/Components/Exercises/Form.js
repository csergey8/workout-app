import React, { Component } from 'react';
import { TextField, 
  Button, 
  FormControl,
  InputLabel,
  Select,
  MenuItem } from '@material-ui/core';

import { withStyles } from '@material-ui/core';



export default class extends Component {

  state = this.getInitialState();

 
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
          fullWidth
        />
        <br />
        <FormControl fullWidth>
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
          fullWidth
        />
        <br />
        <Button
          color="primary"
          variant="raised"
          onClick={this.handleSubmit}
          disabled={!title || !muscles}
        >
          { this.props.exercise ? 'Edit' : 'Create' }
        </Button>
      </form>
    );
  }       
};