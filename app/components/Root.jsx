import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import StatefulCampuses from './StatefulCampuses';
import SingleCampus from './SingleCampus';
import AllStudents from './AllStudents';
import AddStudent from './AddStudent';
import SingleStudent from './SingleStudent';

export default class MainPage extends Component {
  render() {
    return (
      <Router>
        <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={StatefulCampuses} />
          <Route path="/campuses/:campusId" component={SingleCampus} />
          <Route exact path="/students" component={AllStudents} />
          <Route path="/students/:id" component={SingleStudent} />
          <Route path="/add-student" component={AddStudent} />
        </Switch>
        </div>
      </Router>
    );
  }
}
