import React, { Component } from 'react';
import axios from 'axios';

export default class AddCampus extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

    const { name, image } = this.state;
    axios.post('/api/campuses', { name, image })
      .then(res => res.data)
      // redirect to the previos page (might need to remove later)
      .then(() => { window.location.href = '#/campuses';})
      .catch(err => console.log(err));

    this.setState({
      name: '',
      image: '',
    });
  }

  render() {
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
          <label htmlFor="mail">Picture</label>
          <input
            name="image"
            type="text"
            value={this.state.email}
            className="form-control"
            id="image"
            placeholder="Enter picture URL"
            required
            onChange={this.handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}
