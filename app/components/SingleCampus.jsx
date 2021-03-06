import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class SingleCampus extends Component {
  constructor() {
    super();
    this.state = {
      campus: {},
      students: []
    };
  }

  async componentDidMount() {
    const campusId = this.props.match.params.campusId;
    const campusReq = await axios.get(`/api/campuses/${campusId}`)
    const studentsReq = await axios.get(`/api/campuses/${campusId}/students`)
    this.setState({
      campus: campusReq.data,
      students: studentsReq.data
    });
  }

  render() {
    const campus = this.state.campus;
    const students = this.state.students;

    return (
      <div className="container">
        <div className="col-sm-6">
          <h1>{campus.name}</h1>
          <img src={campus.image} />
        </div>
        <div className="col-sm-6">
          <h2>List of students</h2>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {
                students && students.map(student => (
                  <tr key={student.id}>
                    <th scope="row">{student.id}</th>
                    <td><Link to={`/students/${student.id}`}>{student.name}</Link></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
