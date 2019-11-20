import React, { Fragment }from 'react';
import {Header, Footer} from './Layouts';
import Exercises from './Exercises';
import {muscles, exercises} from './store';

export default class extends React.Component{

  state ={
    exercises,
    exercise : {}
  }

  getExercisesbyMuscle() {
    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      const {muscles} = exercise; //destructuring the muscle value into the variable;

      exercises[muscles] =  exercises[muscles] ? [...exercises[muscles], exercise] : [exercise];

      return exercises;
    },{}));
  }

  handleCategorySelected = category => {
    this.setState({
      category
    })
  }

  handleExerciseSelected = (id) => {
    this.setState(({exercises}) => ({
      exercise: exercises.find((ex) => ex.id === id)
    }));
  }

  render = () => {
    const exercises = this.getExercisesbyMuscle();
    const { category, exercise } = this.state
    return (
      <Fragment>
        <Header />

        <Exercises exercises={exercises} category={category} onSelect={this.handleExerciseSelected} exercise={exercise}/>

        <Footer muscles={muscles} onSelect={this.handleCategorySelected} category={category}/>
      </Fragment>
    );
  }
}
