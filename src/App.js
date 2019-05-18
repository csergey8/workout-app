import React, { Component, Fragment } from 'react';
import CssBaseline from  '@material-ui/core/CssBaseline';
import { Header, Footer } from './Components/Layouts/index'; 
import Exercises from './Components/Exercises';
import { exercises, muscles } from './store';
import { Provider } from './context';

class App extends Component {
  state = {
    exercises,
    exercise: {}
  }

  getExercisesByMuscles() {
    const initExercises = muscles.reduce((exercises, category) => ({
      ...exercises,
      [category]: []
    }), {})

    console.log(muscles, initExercises)

    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise;
      
      exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise] : [exercise]


      return exercises
    }, initExercises))
  }

  handleCategorySelect = category => {
    this.setState({
      category
    })
  }
  handleExerciseSelect = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id ),
      editMode: false
    }))
  }

  handleExerciseCreate = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    }))
  }

  handleExerciseSelectEdit = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id ),
      editMode: true
    }))
  }

  handleExreciseDelete = id => {
    this.setState(({ exercises, exercise, editMode }) => ({
      exercises: exercises.filter( ex => ex.id !== id),
      editMode: exercise.id === id ? false : editMode,
      exercise: exercise.id === id ? {} : exercise
    }))
  }

  handleExerciseEdit = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [
          ...exercises.filter(ex => ex.id !== exercise.id),
          exercise
      ],
      exercise
    }))
  }

  getContext = () => ({
    muscles,
    ...this.state,
    exercisesByMuscles: this.getExercisesByMuscles(),
    onCreate: this.handleExerciseCreate,
    onCategorySelect: this.handleCategorySelect,
    onEdit: this.handleExerciseEdit,
    onSelectEdit: this.handleExerciseSelectEdit,
    onDelete:  this.handleExreciseDelete,
    onSelect: this.handleExerciseSelect
  })
   
      
   
  

  render() {
    return (
      <Provider value={this.getContext()}>
        <CssBaseline />
          <Header/>
          <Exercises/>
          <Footer />
      </Provider>
    )
  }
}

export default App;
