import React, { Component } from 'react';
import axios from 'axios';
import store, { writeStudent, postStudent } from '../store';

export default class AddStudentRedux extends Component {
  constructor() {
    super();
    this.state = store.getState();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleChange(event) {
    const value = event.target.value;
    const key = event.target.name;

    const inputValue = {
      // name: value.name,
      // email: value.email,
      // campusId: value.campusId
    };
    inputValue[key] = value
    console.log(key, value, inputValue, 'State: ', this.state)
    store.dispatch(writeStudent(inputValue));
  }

  handleSubmit(event) {
    event.preventDefault();

   // const content = this.state.newMessageEntry;
    const content = {
      name: event.target.name.value,
      email: event.target.email.value,
      campusId: event.target.campusId.value
    };

    store.dispatch(postStudent(content));
  }

  render() {
    console.log('hello from AddStudentRedux');
    // const campuses = this.state.campuses;
    return (
      <form onSubmit={this.handleSubmit} className="container">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            value={this.state.name}
            className="form-control"
            id="name"
            placeholder="Enter name"
            required
            onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="mail">Email</label>
          <input
            name="email"
            type="email"
            value={this.state.email}
            className="form-control"
            id="mail"
            placeholder="Enter email"
            required
            onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="selector">Select a campus</label>
          <select
            name="campusId"
            className="form-control"
            id="selector"
            onChange={this.handleChange} >
            {/* {
              campuses.map(campus => {
                return (
                  <option key={campus.id} value={campus.id}>{campus.name}</option>
                );
              })
            } */}
            <option key="1" value="1">Mars</option>
            <option key="2" value="2">Venus</option>
            <option key="3" value="3">Neptune</option>
            <option key="5" value="5">Mercury</option>
            <option key="6" value="6">Pluto</option>
            <option key="9" value="9">Uranus</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}
