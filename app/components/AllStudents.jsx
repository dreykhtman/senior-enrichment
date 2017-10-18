import React, { Component } from 'react';
import axios from 'axios';


export default class AllStudents extends Component {
  constructor () {
    super();
    this.state = {
      students: []
    };
  }

  componentDidMount () {
    axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        this.setState({ students });
      });
  }

  render() {
    let students = this.state.students;
    return (
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
          {
            students && students.map(student => (
              <tr key={student.id}>
                <th scope="row">{student.id}</th>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.campusId}</td>
                <td><button>X</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}
