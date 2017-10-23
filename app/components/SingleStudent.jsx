import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class SingleStudent extends Component {
  constructor() {
    super();
    this.state = {
      student: {},
      campus: ''
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`/api/students/${id}`)
      .then(res => res.data)
      .then(student => {
        this.setState({
           student,
           campus: student.campus.name
           });
      });
  }

  render() {
    const student = this.state.student;
    const campusName = this.state.campus;

    return (
      <div className="container">
        <table className="table table-striped">
          <thead className="thead-inverse">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Campus</th>
            </tr>
          </thead>
          <tbody>
            <tr key={student.id}>
              <th scope="row">{student.id}</th>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td><Link to={`/campuses/${student.campusId}`}>{campusName}</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
