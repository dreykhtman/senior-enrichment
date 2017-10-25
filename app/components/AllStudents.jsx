import React from 'react';
import { Link } from 'react-router-dom';

const AllStudents = (props) => {
  const students = props.students;

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
                <td>{student.campus.name}</td>
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


    // <div className="container">
    //   {
    //     students.map(student => (
    //       <div key={student.id}>
    //         <h4>{student.name} is from {student.campus.name}</h4>
    //         <Link to={`/campuses/${student.campusId}`}>View Campus</Link>
    //       </div>
    //     ))
    //   }
    // </div>
  );
};

export default AllStudents;
