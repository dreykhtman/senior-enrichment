import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class ManageStudents extends Component {
  constructor() {
    super();
    this.state = {
      campuses: [],
      students: []
    };

    this.deleteStudent = this.deleteStudent.bind(this);
    this.campusFinder = this.campusFinder.bind(this);
  }

  deleteStudent(id) {
    axios.delete(`/api/students/${id}`)
      .then(res => res.data)
      .then(window.location.reload())
      .catch(err => console.log(err));
  }

  async componentDidMount() {
    const campusesReq = await axios.get('/api/campuses');
    const studentsReq = await axios.get('/api/students');

    this.setState({
      campuses: campusesReq.data,
      students: studentsReq.data
    })
  }

  campusFinder(studentId) {
    const campuses = this.state.campuses;
    let campus = campuses.filter(campus => {
      return campus.id === studentId;
    })
    return campus.map(campus => campus.name)
  }

  render() {
    const students = this.state.students;
    const campuses = this.state.campuses;

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
                  <td>{this.campusFinder(student.campusId)}</td>
                  <td><Link className="btn btn-info" to={`/edit-student/${student.id}`}>Edit</Link></td>
                  <td><button className="btn btn-danger" onClick={(e) => this.deleteStudent(student.id, e)}>Delete</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <Link className="btn btn-primary" to="/add-student">Add a student
        </Link>
      </div>
    );
  }
}
