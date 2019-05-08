import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Components/Layouts/index'; 
import Exercises from './Components/Exercises';
import { exercises, muscles } from './store';

class App extends Component {
  state = {
    exercises,
    exercise: {}
  }

  getExercisesByMuscles() {
    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise;
      
      exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise] : [exercise]


      return exercises
    }, {}))
  }

  handleCategorySelect = category => {
    this.setState({
      category
    })
  }
  handleExerciseSelect = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id )
    }))
  }

  handleExerciseCreate = (exercise) => {
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    }))
  }

  render() {
    const exercises = this.getExercisesByMuscles();
    return (
      <Fragment>
        <Header muscles={muscles} onExerciseCreate={this.handleExerciseCreate}/>
        <Exercises exercises={exercises} exercise={this.state.exercise} category={this.state.category} onSelect={this.handleExerciseSelect}/>
        <Footer muscles={muscles} onSelect={this.handleCategorySelect} category={this.state.category}/>
      </Fragment>
    )
  }
}

export default App;
