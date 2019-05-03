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

  handleCategorySelected = category => {
    this.setState({
      category
    })
  }
  handleExerciseSelected = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id )
    }))
  }

  render() {
    const exercises = this.getExercisesByMuscles();
    return (
      <Fragment>
        <Header />
        <Exercises exercises={exercises} exercise={this.state.exercise} category={this.state.category} onSelect={this.handleExerciseSelected}/>
        <Footer muscles={muscles} onSelect={this.handleCategorySelected} category={this.state.category}/>
      </Fragment>
    )
  }
}

export default App;
