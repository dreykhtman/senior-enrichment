import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ManageCampuses extends Component {
  constructor () {
    super();
    this.state = {
      campuses: []
    };

    this.deleteCampus = this.deleteCampus.bind(this);
  }

  deleteCampus(id) {
    axios.delete(`/api/campuses/${id}`)
      .then(res => res.data)
      .then(window.location.reload())
      .catch(err => console.log(err));
  }

  componentDidMount () {
    axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        this.setState({ campuses });
      });
  }

  render() {
    const campuses = this.state.campuses;
    return (
      <div className="container">
      <table className="table table-striped">
        <thead className="thead-inverse">
          <tr>
            <th>Name</th>
            <th>Picture</th>

          </tr>
        </thead>
        <tbody>
          {
            campuses && campuses.map(campus => (
              <tr key={campus.id}>
                <td>{campus.name}</td>
                <td><img className="icon" src={campus.image} alt="" /></td>
                <td><button className="btn btn-danger" onClick={(e) => this.deleteCampus(campus.id, e)}>Delete</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <Link className="btn btn-primary" to="/add-campus">Add a campus
        </Link>
    </div>
    );
  }
}
