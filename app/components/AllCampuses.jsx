import React from 'react';
import { Link } from 'react-router-dom';

const AllCampuses = (props) => {

  const campuses = props.campuses;

  return (
    <div className="row">
      {
        campuses.map(campus => (
          <div className="col-md-4" key={campus.id}>
            <div className="thumbnail">
              <img src={campus.image} />
              <div className="caption">
                <h3>{campus.name}</h3>
                <p>...</p>
                <p><a href="#" className="btn btn-primary" role="button">Button</a></p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default AllCampuses;
