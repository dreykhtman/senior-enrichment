import React, { Component } from 'react';
import axios from 'axios';

export default class EditStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receiveStudent: {},
      campuses: [],
      name: '',
      email: '',
      campusId: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  async componentDidMount() {
    const id = this.props.match.params.id;
    const campusesReq = await axios.get('/api/campuses');
    const studentsReq = await axios.get(`/api/students/${id}`);

    this.setState({
      campuses: campusesReq.data,
      receiveStudent: studentsReq.data
    })
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

    const id = this.props.match.params.id;
    const { name, email, campusId } = this.state;
    axios.put(`/api/students/${id}`, { name, email, campusId })
      .then(res => res.data)
      // redirect to the previos page
      .then(() => { window.location.href = '#/students';})
      .catch(err => console.log(err));
  }

  render() {
    const receiveStudent = this.state.receiveStudent;
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
            placeholder={receiveStudent.name}
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
            placeholder={receiveStudent.email}
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
