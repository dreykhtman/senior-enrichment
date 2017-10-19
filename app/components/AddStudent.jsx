import React, { Component } from 'react';
import axios from 'axios';

export default class AddStudent extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      campusId: '1',
      campuses: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        this.setState({ campuses });
      });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { name, email, campusId } = this.state;
    axios.post('/api/students', { name, email, campusId })
      .then(res => res.data)
      // redirect to the previos page
      .then(() => { window.location.href = '#/students';})
      .catch(err => console.log(err));

    this.setState({
      name: '',
      email: '',
      campusId: '1'
    });
  }

  render() {
    const campuses = this.state.campuses;
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
            value={this.state.campusId}
            className="form-control"
            id="selector"
            onChange={this.handleChange} >
            {
              campuses.map(campus => {
                return (
                  <option key={campus.id }value={campus.id}>{campus.name}</option>
                );
              })
            }
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}
