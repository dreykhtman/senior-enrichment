import React, { Component } from 'react';
import AllStudents from './AllStudents';
import store, { fetchMessages } from '../store';

export default class StatefulStudents extends Component {

  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });

    store.dispatch(fetchMessages());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    console.log('Hello from StatefulStudents.jsx');
    const students = this.state.students;

    return (
      <AllStudents students={students} />
    );
  }
}
