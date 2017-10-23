import React from 'react';
import { Link } from 'react-router-dom';

const AllStudents = (props) => {
  const students = props.students;

  return (

    <div className="container">
      {
        students.map(student => (
          <div key={student.id}>
            <p>{student.name} is from {student.campus.name}</p>
            <Link to={`/campuses/${student.campusId}`}>View Campus</Link>
          </div>
        ))
      }
    </div>
  );
};

export default AllStudents;
