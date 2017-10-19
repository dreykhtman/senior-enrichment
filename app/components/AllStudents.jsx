import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class AllStudents extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    };

    this.deleteStudent = this.deleteStudent.bind(this);
  }

  deleteStudent(id) {
    axios.delete(`/api/students/${id}`)
      .then(res => res.data)
      .catch(err => console.log(err));
  }

  componentDidMount() {
    axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        this.setState({ students });
      });
  }

  render() {
    let students = this.state.students;
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
            {
              students && students.map(student => (
                <tr key={student.id}>
                  <th scope="row">{student.id}</th>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.campusId}</td>
                  <td><button onClick={(e) => this.deleteStudent(student.id, e)}>X</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <Link className="btn btn-primary btn-lg" to="/add-student">Add a student
        </Link>
      </div>
    );
  }
}
