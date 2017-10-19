import React from 'react';

const CampusSelector = (props) => {



  return (
    <div className="form-group">
      {console.log(props)}
    {/* <label htmlFor="selector">Select a campus</label>
    <select className="form-control" id="selector">
      {
        campuses.map(campus => {
          return (
            <option key={campus.id}>{campus.name}</option>
          );
        })
      }
    </select> */}
  </div>
  );
};

export default CampusSelector;
