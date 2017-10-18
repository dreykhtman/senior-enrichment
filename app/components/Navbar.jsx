import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home <span className="sr-only">(current)</span></a></li>
              <li><Link to={`/students`}>Manage Students</Link></li>
            </ul>
            <p className="navbar-text navbar-right">JS Academy</p>
          </div>
        </div>
      </nav>
    );
  }
}

